//core module
const path = require('path');

//external module
const express = require('express');
const userRouter = express.Router();

//local module
const rootdir = require('../utils/pathUtils')

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"))
})

module.exports = userRouter;