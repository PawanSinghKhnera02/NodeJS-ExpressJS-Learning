const http = require ('http');
const requestHandler = require ('./handler')

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running at address https://localhost${PORT}`);
})