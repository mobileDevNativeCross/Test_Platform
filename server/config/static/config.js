'use strict';
const hostUrl = process.env.KOA_BASE_HOST_URL;

module.exports = {
  hostUrl: hostUrl,
  mongoDBTestCollectionPrefix: '098f6bcd4621d373cade4e832627b4f6',
  allowCrosOrigin: true,
  dbName: './database.sqlite',
};
