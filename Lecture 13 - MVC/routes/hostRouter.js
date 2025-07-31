//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const homesController = require("../controllers/homes");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;
