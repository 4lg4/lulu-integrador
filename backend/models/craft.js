module.exports = {
  attributes: {
    type: {
      type: 'string',
      required: true,
      // isIn: ['artesanato', 'material'],
    },
    price: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    district: {
      type: 'string',
    },
    contact: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    user: {
      model: 'user',
    },
  },
};
