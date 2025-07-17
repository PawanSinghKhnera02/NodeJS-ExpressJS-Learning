//core module
const path = require('path');

//external module
const express = require('express');
const hostRouter =  express.Router();

//local module
const rootdir = require('../utils/pathUtils')

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'addHome.html'))
})

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))
  res.sendFile(path.join(rootdir, 'views', 'homeAdded.html'))
});

module.exports = hostRouter;