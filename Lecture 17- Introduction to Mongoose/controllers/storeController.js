const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "airbnb Home",
        currentPage: "index",
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
      });
    })
    .catch((error) => {
      console.log("error fetching homes", error);
    });
  // console.log(registeredHomes);
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate("houseId")
    .then((favourites) => {
      const favouriteHomes = favourites.map((fav) => fav.houseId);

      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;

  Favourite.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("already marked as favourite");
      } else {
        fav = new Favourite({ houseId: homeId });
        fav.save().then((result) => {
          console.log("Fav added", result);
        });
      }
      res.redirect("/store/favourites");
    })
    .catch((err) => {
      console.log("Error while marking favourites", err);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log("fav removed: ", result);
    })
    .catch((err) => {
      console.log("error occured while removing fav", err);
    })
    .finally(() => {
      res.redirect("/store/favourites");
    });
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
      });
    }
  });
};
