const DiskAdapter = require('sails-disk');
const MongoAdapter = require('sails-mongo');
const Waterline = require('waterline');
const models = require('../models');

module.exports = ()=> new Promise((resolve, reject)=> {
    Waterline.start({
        adapters: {
            'sails-disk': DiskAdapter,
            'sails-mongo': MongoAdapter,
        },

        datastores: {
            default: {
                adapter: 'sails-disk',
                // mongo config
                // adapter: 'sails-mongo',
                // url: 'mongodb://user:password@host:port/database',
            },
        },

        models,

        defaultModelSettings: {
            primaryKey: 'id',
            datastore: 'default',
            attributes: {
                id: { type: 'number', autoMigrations: { autoIncrement: true } },
            },
        }

    }, function(err, orm) {
        if (err) {
            console.error('Could not start up the ORM:\n', err);
            // reject(err);
            return process.exit(1);
        }

        return resolve(orm);
    });
});
