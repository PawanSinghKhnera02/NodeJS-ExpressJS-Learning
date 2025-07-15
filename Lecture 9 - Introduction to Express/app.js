// Core Module
// const http = require('http');

//External Module
const express = require('express');

//Local Module
// const requestHandler = require('./user')

const app = express();

app.get("/", (req, res, next) => {
  console.log(" came in first middleware",req.url, req.method);
  // res.send("<p>came from first middleware</p>");
  next();
})

app.post("/submit-details",(req, res, next) => {
  console.log(" came in second middleware",req.url, req.method);
  res.send("<p> Hello Pawan How are you doing?</p>");
})

app.use("/", (req, res, next) => {
  console.log(" came in another middleware",req.url, req.method);
  res.send("<p> came from another middleware </p>");

})


// const server = http.createServer(app);



const PORT = 3000;
app.listen(PORT , () => {
  console.log(`server is running at address https://localhost: ${PORT} /`);
})
// const PORT = 3000;
// server.listen(PORT , () => {
//   console.log(`server is running at address https://localhost: ${PORT} /`);
// })