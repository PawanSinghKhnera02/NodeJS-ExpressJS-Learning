//Core Module
const path = require("path");

//External Module
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const DB_PATH =
  "mongodb+srv://root:root@pawanlearning.hlcvopr.mongodb.net/todo?retryWrites=true&w=majority&appName=PawanLearning";

//local module
const todoItemsRouter = require("./routes/todoItemsRouter");
const errorsController = require("./controllers/errors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

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
