import validator  from 'validator';

import * as _ from 'lodash';


function localValidator (){
  this.notEmpty = (str) => {
    return !this.isEmpty(str);
  }

  this.isDate = (str) => {
    try {
      let date = new Date(str);
      if (date.toString()==='Invalid Date') {
        return false
      }
    }
    catch (e) {
      return false
    }
    return true;
  }
}

localValidator.prototype = validator;


class validate {

  constructor () {
    this.validator = new localValidator();
  }

  dataCheck (data,prop) {
    if (_.isUndefined(data)){
      prop.push('');
    }
    else {
      prop.push(data.toString());
    }
  }

  optionsCheck (check,options,prop) {
    if (!_.isEmpty(options)) {
      if(check === 'matches') {
        prop.push(options.pattern);
        if (options.modifiers) {
          prop.push(options.modifiers);
        }
      }
      else {
        let keys = _.keys(options);
        prop.push(options[keys[0]]);
      }
    }
  }

  check (data,constraints) {
    let errorList = [];

    for (let param in constraints) {
      for (let check in constraints[param]) {

        let prop = [];

        if (!data || !data[param]) {
          errorList.push({param, message: constraints[param][check].message});
          continue;
        }
        this.dataCheck(data[param],prop);

        this.optionsCheck(check, _.omit(constraints[param][check], ['message']), prop)

        if (!this.validator[check](...prop)) {
          errorList.push({param, message: constraints[param][check].message});
        }
      }
    }
    return errorList;
  }

}

export default new validate();