console.log("pawan singh khnera")

const fs = require('fs');
fs.writeFile("output.text", "writing file", (err)=>{
  if(err) throw err;
  else console.log("file written successfully.");
});