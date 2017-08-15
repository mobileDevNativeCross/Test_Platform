// import db  from "../db";  
import db from 'sqlite';

before(async () => {
  db.run = async (query) => ( query );
  db.all = async (query) => ( query );
  db.open = async (query) => ( query );
});
