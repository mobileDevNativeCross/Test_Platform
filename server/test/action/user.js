import { expect } from 'chai';
import path from 'path';

import user from '../../action/user';

describe('action', () => {
  describe('user', () => {
    it('csvImport', async () => {
      const res = await user.csvImport({
        files: {
          csv: {
            path: path.join(__dirname, '/../../../test.csv'),
          },
        },
      });

      expect(res).to.deep.equal([{"firstname":"test","surname":"test","email":"test@test.test"},{"firstname":"test2","surname":"test2","email":"test2@test.test"}]);
    });

    it('getPage', async () => {
      const res = await user.getPage({
        page: 1,
        size: 20,
      });

      expect(res).to.deep.equal({ result: 'SELECT * FROM user LIMIT 20 , 20;', totalPageCount: 0 });
    });

    it('getAll', async () => {
      const res = await user.getAll();
      expect(res).to.equal('SELECT * FROM user;');
    });
  });
});

