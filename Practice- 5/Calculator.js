const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write("<h1>Welcome to my Calculator</h1>");
    res.write("<a href='/calculator'>Go to Calculator</a>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.write(
      `<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
<form action="/calculate-result" method="POST">
  <input type="number" name="firstNumber">
  <input type="number" name="secondNumber">
  <input type="submit" value="submit">
</form>
</body>
</html>`
    );
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);

      req.on("end", () => {
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
        const params = new URLSearchParams(fullbody);
        const bodyObject = Object.fromEntries(params);
        const sum =
          Number(bodyObject.firstNumber) + Number(bodyObject.secondNumber);
        console.log(bodyObject);
        console.log(sum);
        res.write(`
      <h1> Your Sum is ${sum}</h1>
      <a href='/'>Go to Home</a>
      `);
        return res.end();
      });
    });
  }

  // res.write("<h1>404 Error</h1>");
  // res.write("<a href='/'>Go to Home</a>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running at address https://localhost:${PORT}`);
});
