const Home = require("../models/home");
const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  console.log("session value", req.session);
  Home.find()
    .then((registeredHomes) => {
      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "airbnb Home",
        currentPage: "index",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((error) => {
      console.log("error fetching homes", error);
    });
};

exports.getHomes = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/home-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Homes List",
        currentPage: "Home",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    })
    .catch((error) => {
      console.log("error fetching homes", error);
    });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");
  res.render("store/favourite-list", {
    favouriteHomes: user.favourites,
    pageTitle: "My Favourites",
    currentPage: "favourites",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddToFavourite = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    await user.save();
  }

  res.redirect("/store/favourites");
};

exports.postRemoveFromFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);

  if (user.favourites.includes(homeId)) {
    user.favourites = user.favourites.filter((fav) => fav != homeId);
    await user.save();
  }
  res.redirect("/store/favourites");
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/store/homes");
    } else {
      res.render("store/home-detail", {
        pageTitle: "Home Detail",
        currentPage: "Home",
        home: home,
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};
