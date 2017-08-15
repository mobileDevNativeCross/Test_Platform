import * as _ from 'lodash';
import db from '../db';

class User {
  async insertRow(userList) {
    let query = 'INSERT INTO user ( firstname, surname, email ) VALUES ';
    userList.forEach((user, index) => {
      query += !index ? '' : ', ';
      query += `('${user.firstname}', '${user.surname}', '${user.email}')`;
    });
    query += ';';

    const res = await db.run(query);
    return res;
  }

  async findAll() {
    const res = await db.all('SELECT * FROM user;');
    return res;
  }

  async findPage({ page = 0, size = 20 } = { page: 0, size: 20 }) {
    let query = `SELECT * FROM user LIMIT ${size}`;
    query += page * size ? ` OFFSET ${page * size};` : '';
    const res = await db.all(query);
    return res;
  }

  async UserCount({ size = 20 } = { size: 20 }) {
    const query = 'SELECT COUNT (DISTINCT id) as count FROM user';
    const res = await db.all(query);
    const count = Math.ceil((res[0].count / size));
    return _.isInteger(count) ? count : 0;
  }
}

export default new User();
