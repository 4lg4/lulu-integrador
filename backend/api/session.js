const Waterline = require('waterline');
const API = '/api/session';
const ORM_MODEL = 'session';

module.exports = (app, orm)=> {
  // app.get(`${API}/:session`, function (req, res) {
  //   Waterline.getModel(ORM_MODEL, orm)
  //     .find()
  //     .catch({name: 'UsageError'}, function (err) {
  //       console.log('Refusing to perform impossible/confusing query.  Details:', err);
  //       return res.sendStatus(400);
  //     })
  //     .catch(function (err) {
  //       console.error('Unexpected error occurred:', err.stack);
  //       return res.sendStatus(500);
  //     })
  //     .then(function (records) {
  //       return res.json(records);
  //     });
  // });

  // Find one session
  app.get(`${API}/:session`, function (req, res) {
    Waterline.getModel(ORM_MODEL, orm)
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


  app.post(API, function (req, res) {
    Waterline.getModel(ORM_MODEL, orm)
      .create(req.body)
      .meta({fetch: true})
      .catch({name: 'UsageError'}, function (err) {
        console.log('Refusing to perform impossible/confusing query.  Details:', err);
        return res.sendStatus(400);
      })
      .catch({name: 'AdapterError', code: 'E_UNIQUE'}, function (err) {
        console.log('Refusing to create duplicate session.  Details:', err);
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

  // app.delete(API, function (req, res) {
  //   Waterline.getModel(ORM_MODEL, orm)
  //     .destroy({id: req.params.id}, function (err) {
  //       if (err && err.name === 'UsageError') {
  //         return res.sendStatus(400);
  //       } else if (err) {
  //         console.error('Unexpected error occurred:', err.stack);
  //         return res.sendStatus(500);
  //       } else {
  //         return res.sendStatus(200);
  //       }
  //     });
  // });
};
