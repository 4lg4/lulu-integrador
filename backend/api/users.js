const Waterline = require('waterline');
const API_USERS = '/api/users';
const API_USER = `${API_USERS}/:id`;

module.exports = (app, orm)=> {
  app.get(API_USERS, function (req, res) {
    Waterline.getModel('user', orm)
      .find()
      .catch({name: 'UsageError'}, function (err) {
        console.log('Refusing to perform impossible/confusing query.  Details:', err);
        return res.sendStatus(400);
      })
      .catch(function (err) {
        console.error('Unexpected error occurred:', err.stack);
        return res.sendStatus(500);
      })
      .then(function (record) {
        return res.json(record);
      });
  });


  // Find one user
  app.get(API_USER, function (req, res) {
    Waterline.getModel('user', orm)
      .findOne({id: req.params.id})
      .catch({name: 'UsageError'}, function (err) {
        console.log('Refusing to perform impossible/confusing query.  Details:', err);
        return res.sendStatus(400);
      })
      .catch(function (err) {
        console.error('Unexpected error occurred:', err.stack);
        return res.sendStatus(500);
      })
      .then(function (record) {
        return res.json(record);
      });
  });


  // Create a user
  // (This one uses promises, just for fun.)
  app.post(API_USERS, function (req, res) {
    Waterline.getModel('user', orm)
      .create(req.body)
      .meta({fetch: true})
      .catch({name: 'UsageError'}, function (err) {
        console.log('Refusing to perform impossible/confusing query.  Details:', err);
        return res.sendStatus(400);
      })
      .catch({name: 'AdapterError', code: 'E_UNIQUE'}, function (err) {
        console.log('Refusing to create duplicate user.  Details:', err);
        return res.status(401).json(err);
      })
      .catch(function (err) {
        console.error('Unexpected error occurred:', err.stack);
        return res.sendStatus(500);
      })
      .then(function (newRecord) {
        return res.status(201).json(newRecord);
      });
  });

  // Destroy a user (if it exists)
  app.delete(API_USER, function (req, res) {
    Waterline.getModel('user', orm)
      .destroy({id: req.params.id}, function (err) {
        if (err && err.name === 'UsageError') {
          return res.sendStatus(400);
        } else if (err) {
          console.error('Unexpected error occurred:', err.stack);
          return res.sendStatus(500);
        } else {
          return res.sendStatus(200);
        }
      });
  });


  // Update a user
  app.put(API_USER, function (req, res) {

    // Don't pass ID to update
    // > (We don't want to try to change the primary key this way, at least not
    // > for this example.  It's totally possible to do that, of course... just
    // > kind of weird.)
    var valuesToSet = req.body;
    delete valuesToSet.id;

    // In this example, we'll send back a JSON representation of the newly-updated
    // user record, just for kicks.
    Waterline.getModel('user', orm)
      .update({id: req.params.id})
      .set(valuesToSet)
      .meta({fetch: true})
      .exec(function (err, updatedUsers) {
        if (err && err.name === 'UsageError') {
          return res.sendStatus(400);
        } else if (err && err.name === 'AdapterError' && err.code === 'E_UNIQUE') {
          return res.status(401).json(err);
        } else if (err) {
          console.error('Unexpected error occurred:', err.stack);
          return res.sendStatus(500);
        } else if (updatedUsers.length < 1) {
          return res.sendStatus(404);
        } else {
          return res.status(200).json(updatedUsers[0]);
        }
      });
  });
};
