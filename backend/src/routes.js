const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

routes.post("/devs", DevController.store);


module.exports = routes;

//************************
//   yarn add mongoose
//   yarn add axios
//************************