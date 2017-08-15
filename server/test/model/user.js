import { expect } from 'chai';

import user from '../../model/user';

describe('model', () => {
  describe('user', () => {
    it('insertRow', async () => {
      const res = await user.insertRow([{"firstname":"test","surname":"test","email":"test@test.test"},{"firstname":"test2","surname":"test2","email":"test2@test.test"}]);
      expect(res).to.equal(`INSERT INTO user ( firstname, surname, email ) VALUES ('test', 'test', 'test@test.test'), ('test2', 'test2', 'test2@test.test');`);
    });

    it('findAll', async () => {
      const res = await user.findAll();
      expect(res).to.equal('SELECT * FROM user;');
    });

    it('findPage', async () => {
      const res = await user.findPage();
      expect(res).to.equal('SELECT * FROM user LIMIT 20');
    });

    it('UserCount', async () => {
      const res = await user.UserCount();
      expect(res).to.equal(0);
    });
  });
});

