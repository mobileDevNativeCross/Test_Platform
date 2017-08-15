import Koa from 'koa';
import staticFile from 'koa2-file-server';
import path from 'path';
import body from 'koa-body';
import passport from 'koa-passport';
import os from 'os';
import db from './db';

import { boot as bootstrap } from './component/bootstrap';
import config from './config';

const app = new Koa();


app.use(passport.initialize());

app.use(
  body({
    multipart: true,
    formidable: {
      uploadDir: os.tmpdir(),
    },
  }));


app.use(staticFile(path.join(__dirname, '/../client'), {
  maxAge: config.staticMaxAge,
}));

app.use(async (ctr, next) => {
  const temp = ctr;
  temp.req.query = ctr.query;
  await next();
});

bootstrap.routes(app);

app.listen(config.http.port, () => {
  console.log([new Date(), 'Server started on', config.http.port].join(' '));
});
