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

  // static getFavourites(callback) {
  //   fs.readFile(favouriteDataPath, (err, data) => {
  //     callback(!err ? JSON.parse(data) : []);
  //   });
  // }

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

  static removeFromFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      const updatedFavourites = favourites.filter((id) => id !== homeId);
      fs.writeFile(
        favouriteDataPath,
        JSON.stringify(updatedFavourites),
        callback
      );
    });
  }

  // static getFavourites(callback) {
  //   fs.readFile(favouriteDataPath, (err, data) => {
  //     if (err) {
  //       // If file doesn't exist or reading fails
  //       callback([]);
  //     } else {
  //       try {
  //         // Handle empty file case
  //         const fileContent = data.toString().trim();
  //         const favourites = fileContent ? JSON.parse(fileContent) : [];
  //         callback(Array.isArray(favourites) ? favourites : []);
  //       } catch (parseErr) {
  //         console.error(
  //           "❌ Invalid JSON in favourites.json:",
  //           parseErr.message
  //         );
  //         callback([]); // fallback to empty array
  //       }
  //     }
  //   });
  // }
};

//this is a favourite model file
