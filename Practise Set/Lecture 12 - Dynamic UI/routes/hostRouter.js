//core module
const path = require("path");

//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const rootdir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home To Airbnb",
    currentPage: "addHome",
  });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home registration successful for:", req.body);
  registeredHomes.push(req.body);
  // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    home: req.body,
    currentPage: "homeAdded",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
