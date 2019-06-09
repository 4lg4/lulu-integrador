const _orm = require('./bootstrap/orm');
const _app = require('./bootstrap/app');
const _api = require('./api');

(async ()=> {
  try {
    const orm = await _orm();
    const app = await _app();
    const api = await _api(app, orm);
  } catch (e) {
    console.log('APP ERROR', e);
    return process.exit(1);
  }
})();
