//external module
const express = require("express");
const storeRouter = express.Router();

//local module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/favourites", homesController.getFavouriteList);

storeRouter.get("/homes/:homeId", homesController.getHomeDetails);
storeRouter.post("/favourites", homesController.postAddToFavourite);

storeRouter.post("/remove-favourite", homesController.postRemoveFromFavourite);

module.exports = storeRouter;
