const path = require('path');
const express = require('express');
//local module
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter');

const rootdir = require('./utils/pathutils')

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', '404.html' ));
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
})