const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

const routes = express.Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

<<<<<<< HEAD

=======
>>>>>>> a388ce966877eb0e28602a35284aa4323771aa3a
module.exports = routes;