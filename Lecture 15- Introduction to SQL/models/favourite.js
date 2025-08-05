//this is a favourite model file

const fs = require("fs");
const path = require("path");
const rootdir = require("../utils/pathUtils");

const favouriteDataPath = path.join(rootdir, "data", "favourites.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        try {
          callback(JSON.parse(data));
        } catch (e) {
          callback([]);
        }
      }
    });
  }

  static deleteByID(delHomeId, callback) {
    Favourite.getFavourites((homeIds) => {
      homeIds = homeIds.filter(
        (homeId) => delHomeId.toString() !== homeId.toString()
      );
      fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
    });
  }
};

// this is a favourite model file
