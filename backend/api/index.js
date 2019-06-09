const users = require('./users');
const session = require('./session');

module.exports = (app, orm)=> {
  users(app, orm);
  session(app, orm);
};
