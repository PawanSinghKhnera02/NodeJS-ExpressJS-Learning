const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === "/"){
    res.write(`<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="men">Men</a></li>
        <li><a href="women">Women</a></li>
        <li><a href="kids">Kids</a></li>
        <li><a href="carts">Carts</a></li>
      </ul>
    </nav>
  </header> 
</body>
</html>`);
return res.end();
    }

else if(req.url === '/home'){
  res.write('<html> <h1>Welcome to Home</h1> </html>');
  return res.end();
}
else if(req.url === '/men'){
  res.write('<html> <h1>Welcome to Men</h1> </html>');
  return res.end();
}
else if(req.url === '/women'){
  res.write('<html> <h1>Welcome to Women</h1> </html>');
  return res.end();
}
else if(req.url === '/kids'){
  res.write('<html> <h1>Welcome to Kids</h1> </html>');
  return res.end();
}
else if(req.url === '/carts'){
  res.write('<html> <h1>Welcome to Carts</h1> </html>');
  return res.end();
}
res.write('<html> <h1>404 Error</h1> </html>');
  
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running at address localhost://${PORT}`);
});
