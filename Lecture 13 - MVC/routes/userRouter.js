//external module
const express = require("express");
const userRouter = express.Router();

//local module
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
