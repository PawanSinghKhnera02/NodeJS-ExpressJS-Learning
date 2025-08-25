//this is a favourite model file
const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    // unique: true, // if uncomment this then we will be able to add only one home to the fav... and if we try to add more than one , it will give errorn then ...
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
