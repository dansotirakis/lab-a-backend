const express = require("express");

const routes = express.Router();
const itemController = require("./app/controller/item");

routes.get("/item", itemController.index);
routes.post("/item", itemController.store);

module.exports = routes;
