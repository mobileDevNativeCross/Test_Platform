const hostUrl = process.env.KOA_BASE_HOST_URL || 'http://localhost:3000/';

module.exports = {
  clientMainFile: '/client/index.html',
  serverMainFile: '/server/Tasks.jsx',
  staticMaxAge: 0,
};
