const http = require("http");
const fs = require("fs");

// function requestListener(req, res){
//   console.log(req);
// }
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method, req.headers);

  //routing requests================================>>>>>>>>>>>>>>

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Pawan portfolio </title></head>");
    res.write("<body> <h1>Enter your details: </h1>");

    res.write("<form action='/submit-details' method='POST'>");

    res.write(
      "<input type = 'text' name = 'username' placeholder= 'enter your name'><br>"
    );
    res.write("<label for ='male'> Male </label> ");
    res.write(
      "<input type = 'radio' id='male' name= 'gender' value= 'male'/> "
    );
    res.write("<label for ='female'> Female </label> ");
    res.write(
      "<input type = 'radio' id='female' name= 'gender' value= 'female'/> <br>"
    );
    res.write("<input type = 'submit' value= 'submit' >");
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST" ) 
  {
    fs.writeFileSync("user.text", "Pawan Singh Khnera");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Pawan portfolio </title></head>");
  res.write("<body> <h1>I am a Software Developer</h1></body>");
  res.write("</html>");
  return res.end();
});

// server.listen(3000);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at address https://localhost:${PORT}`);
});
