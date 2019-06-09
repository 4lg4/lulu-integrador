const {join} = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = ()=> new Promise((resolve, reject)=> {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', express.static(join(__dirname, '../../dist')));

  app.listen(process.env.PORT || 3000, function (err){
    if (err) {
      console.error('Failed to lift express server:', err);
      // reject();
      return process.exit(1);
    }

    console.log('Express server is running and ORM is started!');
    console.log('To see saved users, visit http://localhost:3000/users');
    console.log('Press CTRL+C to terminate process.');

    return resolve(app);
  });
});
