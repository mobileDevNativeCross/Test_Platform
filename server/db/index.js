import db from 'sqlite';
import path from 'path';
import Promise from 'bluebird';
import config from '../config';

Promise.resolve()
  .then(() => db.open(path.join(__dirname, '../../', config.dbName), { Promise }))
  .then(() => db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, firstname TEXT, surname TEXT, email TEXT);'));

export default db;
