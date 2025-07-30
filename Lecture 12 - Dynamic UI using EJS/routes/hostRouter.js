//core module
const path = require("path");

//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const rootdir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home To Airbnb" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home registration successful for:", req.body, req.body.house);
  registeredHomes.push({ houseName: req.body.house });
  // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
