//core module
const path = require('path');
//external module 
const express = require('express');

//local module 
const rootdir = require('../utils/pathutils')

const homeRoute = express.Router();

homeRoute.get("/" , (req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootdir, 'views', 'home.html'));

})

module.exports = homeRoute;