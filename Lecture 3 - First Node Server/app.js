const http = require('http');

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener);

const server = http.createServer((req, res)=> {
  console.log(req);
  pocess.exit(); // stops event loop
});

// server.listen(3000); 

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server running at address https://localhost:${PORT}`)
})


