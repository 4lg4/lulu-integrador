const Waterline = require('waterline');
const API = '/api/search/:query';

module.exports = (app, orm)=> {
  const Material = Waterline.getModel('material', orm);
  const Craft = Waterline.getModel('craft', orm);

  app.get(API, async (req, res)=> {
    console.log('/api/search/:query', req.params);
    const materials = await Material
      .find()
      .where({
        or: [
          {
            title: {
              contains: req.params.query,
            },
          },
          {
            description: {
              contains: req.params.query,
            },
          },
        ],
      });

    const crafts = await Craft
      .find()
      .where({
        or: [
          {
            title: {
              contains: req.params.query,
            },
          },
          {
            description: {
              contains: req.params.query,
            },
          },
        ],
      });

    return res.json({
      materials,
      crafts,
    });
  });
};
