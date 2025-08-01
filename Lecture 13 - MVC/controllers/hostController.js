const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home To Airbnb",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  // console.log("Home registration successful for:", req.body); // gives the object or the each entry details
  const { houseName, price, location, rating, photoUrl } = req.body; // destructured so that we don't have to write req.body multiple times

  const home = new Home(houseName, price, location, rating, photoUrl); //create new object for each input

  home.save(); // it will save the data
  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    home: req.body,
    currentPage: "homeAdded",
  });
};
