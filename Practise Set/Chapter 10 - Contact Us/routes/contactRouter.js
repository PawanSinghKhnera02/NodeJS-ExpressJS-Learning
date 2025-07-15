//core module
const path = require('path');

//external module
const express = require('express');

//local module
const rootdir = require("../utils/pathutils")

const contactRoute = express.Router();

contactRoute.get("/contact-us" , (req, res, next) => {
  console.log("handling contact us for GET", req.url, req.method);
  res.sendFile(path.join(rootdir, 'views', 'contact-us.html'));
})

contactRoute.post("/contact-us" , (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, 'views', 'contact-success.html'));

})

module.exports = contactRoute;