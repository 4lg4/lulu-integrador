module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    materials: {
      collection: 'material',
      via: 'user',
    }
  }
};
