const users = require('./users');
const session = require('./session');
const material = require('./material');
const craft = require('./craft');
const search = require('./search');

module.exports = (app, orm)=> {
  users(app, orm);
  session(app, orm);
  material(app, orm);
  craft(app, orm);
  search(app, orm);
};
