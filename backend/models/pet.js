module.exports = {
  // datastore: 'customerDb',
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    breed: {
      type: 'string',
      validations: {
        isIn: ['chihuahua', 'great dane', 'collie', 'unknown'],
      },
      defaultsTo: 'unknown',
    },
  },
};
