const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
  // console.log(registeredHomes);
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("came to add favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite: ", error);
    }
    res.redirect("/store/favourites");
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  console.log("Removing from favourite:", req.body.id);
  Favourite.removeFromFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while removing favourite: ", error);
    }
    res.redirect("/store/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
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
