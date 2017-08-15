const hostUrl = process.env.KOA_BASE_HOST_URL || 'https://spravno.herokuapp.com/';

module.exports = {
  clientMainFile: '/client/index.html',
  serverMainFile: '/dist/Tasks.jsx',
  staticMaxAge: 31104000000, //  1000*60*60*24*30*12
};
