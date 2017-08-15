import send from 'koa-send';
import config from '../config';
import koaRouter from 'koa-router';

export let router = koaRouter({
  prefix: '',
});

router.get([
    '/',
  ], async (ctr,next) => {
    await send(ctr, config.clientMainFile);
    await next();
  });
