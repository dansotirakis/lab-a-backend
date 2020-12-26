const Item = require("../model/item");

class ItemController {
  async store(req, res) {
    const data = await Item.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Item.find({});

    return res.json(data);
  }

}

module.exports = new ItemController();