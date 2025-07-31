const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home To Airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  // console.log("Home registration successful for:", req.body); // gives the object or the each entry details
  const { houseName, price, location, rating, photoUrl } = req.body; // destructured so that we don't have to write req.body multiple times

  const home = new Home(houseName, price, location, rating, photoUrl); //create new object for each input

  home.save(); // it will save the data
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    home: req.body,
    currentPage: "homeAdded",
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    })
  );
  // console.log(registeredHomes);
};
