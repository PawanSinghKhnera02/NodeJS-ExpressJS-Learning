//Core Module
const path = require("path");

//External Module
const express = require("express");

//local module
const rootdir = require("./utils/pathUtils");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const errorsController = require("./controllers/errors");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootdir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on address http://localhost: ${PORT}/`);
});
