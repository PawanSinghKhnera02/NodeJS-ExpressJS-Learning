//Core Module
const path = require("path");

//External Module
const express = require("express");

const { default: mongoose } = require("mongoose");

const DB_PATH =
  "mongodb+srv://root:root@pawanlearning.hlcvopr.mongodb.net/todo?retryWrites=true&w=majority&appName=PawanLearning";

//local module
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded());

app.use(express.static(path.join(rootdir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`server is running on address http://localhost: ${PORT}/`);
    });
  })
  .catch((err) => {
    console.log("Eroor while connecting to Mongo:", err);
  });
