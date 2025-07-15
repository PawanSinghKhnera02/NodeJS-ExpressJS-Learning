//Core Module
const path = require('path');

//External Module
const express =require('express');

//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const rootdir = require('./utils/pathUtils');

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use ((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, 'views', '404.html'))
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on address http://localhost: ${PORT}/`);
})