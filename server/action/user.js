import * as _ from 'lodash';
import csv  from 'csvtojson';
import q  from 'q';
import validator from '../component/validator';
import user  from '../model/user';

class User {
  async getAll() {
    return await user.findAll();
  }

  async getPage(body) {
    const validateObj = {};

    if (!_.isUndefined(body.page)) {
      validateObj.page = {
        isInt: {
          message: 'Valid page number is required',
        },
      };
    }

    if (!_.isUndefined(body.size)) {
      validateObj.page = {
        isInt: {
          message: 'Valid page size is required',
        },
      };
    }

    const errorList = validator.check(body, validateObj);

    if (errorList.length) {
      throw (errorList);
    }
    return {
      result: await user.findPage(body),
      totalPageCount: await user.UserCount(body),
    };
  }

  async csvImport(body) {
    const deferred = q.defer();
    const userlist = [];

    csv()
      .fromFile(body.files.csv.path)
      .on('json', (jsonObj) => {
        const errorList = validator.check(jsonObj, {
          firstname: {
            notEmpty: {
              message: 'Valid firstname is required',
            },
          },
          surname: {
            notEmpty: {
              message: 'Valid surname is required',
            },
          },
          email: {
            isEmail: {
              message: 'Valid email is required',
            },
          },
        });

        if (errorList.length) {
          deferred.reject(errorList);
        }

        userlist.push(jsonObj);
      })
      .on('done', (error) => {
        if (error) {
          deferred.reject(error);
        }
        deferred.resolve();
      });

    await deferred.promise;

    await user.insertRow(userlist);
    return userlist;
  }
}

export default new User();
