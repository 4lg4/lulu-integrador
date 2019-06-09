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
    material: {
      type: 'string',
      required: true,
      // isIn: ['plástico', 'papel', 'metal', 'vidro'],
    },
    user: {
      model: 'user',
    },
  },
};
