const express = require('express');
const bodyparser = require('body-parser');

const app = express();


app.use((req, res, next) =>{
  console.log("first dummy middleware", req.url, req.method);
  next();
});
app.use((req, res, next) =>{
  console.log("second dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) =>{
//   console.log("third middleware", req.url, req.method);
//   res.send("<h1>Welcome to my page</h1>");
// });

app.get("/" , (req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to my page</h1>`);

})

app.get("/contact-us" , (req, res, next) => {
  console.log("handling contact us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter Your Name" />
      <input type="email" name="email" placeholder="Enter Your Email" />
      <input type="submit" > 
    </form>
    `);
})

app.post("/contact-us" , (req, res, next) => {
  console.log("first handling", req.url, req.method, req.body);
  next();
})

app.use(bodyparser.urlencoded());

app.post("/contact-us" , (req, res, next) => {
  console.log("handling contact us for post", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly.</h1>`)

})




const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
})