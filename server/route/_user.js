import koaRouter from 'koa-router';

import userAction from '../action/user';
import middlewareWrapper from '../component/middlewareWrapper';


export const router = koaRouter({
  prefix: '/api/v1/user',
});

/**
  * @apiDefine userArray
  * @apiSuccess  {array} . Array of user
  * @apiSuccess  {String} .id User id
  * @apiSuccess  {String} .firstname Firstname
  * @apiSuccess  {String} .surname Surname
  * @apiSuccess  {String} .email Email
*/


/**

  * @apiName csvImportUser
  * @api {POST} /api/v1/user/csvImport Import user

  * @apiDescription Import user

  * @apiVersion 0.0.1

  * @apiGroup User

  * @apiHeader {String} Content-Type=multipart/form-data
  * @apiHeader {String} cache-control=no-cache

  * @apiParam  {file} csv File

  * @apiExample {curl} Example usage:
  *     curl -X POST 
  *       http://localhost:3000/api/v1/user/csvImport 
  *       -H 'cache-control: no-cache' 
  *       -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
  *       -F csv=@test.csv

  * @apiSuccessExample {json} Success-Response:
  [{"firstname":"test","surname":"test","email":"test@test.test"}]
  
  * @apiUse userArray
*/

router.post('/csvImport', async (req, next) => {
  await middlewareWrapper.wrape(req, next, async () => {
    return await userAction.csvImport(req.request.body);
  });
});


/**

  * @apiName getAllUsers
  * @api {GET} /api/v1/user/all Get all users

  * @apiDescription Get all users

  * @apiVersion 0.0.1

  * @apiGroup User

  * @apiHeader {String} Content-Type=application/json Content-Type

  * @apiExample {curl} Example usage:
  *     curl 'http://localhost:3000/api/v1/user/all
  *      -H "Content-Type: application/json"
  *      -X GET

  * @apiSuccessExample {json} Success-Response:
  [{"firstname":"test","surname":"test","email":"test@test.test"}]
  
  * @apiUse userArray

*/

router.get('/all', async (req, next) => {
  await middlewareWrapper.wrape(req, next, async () => {
    return await userAction.getAll();
  });
});


/**

  * @apiName getUsersPage
  * @api {GET} /api/v1/user/page Get users page

  * @apiDescription Get users page

  * @apiVersion 0.0.1

  * @apiGroup User

  * @apiParam  {Number} [page] Page number
  * @apiParam  {Number} [size] Page size

  * @apiHeader {String} Content-Type=application/json Content-Type

  * @apiExample {curl} Example usage:
  *     curl 'http://localhost:3000/api/v1/user/page?page=0&size=20
  *      -H "Content-Type: application/json"
  *      -X GET

  * @apiSuccessExample {json} Success-Response:
  {"result":[{"id":1,"firstname":"test","surname":"test","email":"test@test.test"}]}
  * @apiSuccess  {Number} totalPageCount Total page count
  * @apiSuccess  {array} result Array of user
    * @apiSuccess  {String} result.id User id
    * @apiSuccess  {String} result.firstname Firstname
    * @apiSuccess  {String} result.surname Surname
    * @apiSuccess  {String} result.email Email

*/

router.get('/page', async (req, next) => {
  await middlewareWrapper.wrape(req, next, async () => {
    return await userAction.getPage(req.query);
  });
});
