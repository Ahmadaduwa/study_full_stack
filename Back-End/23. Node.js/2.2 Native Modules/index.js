const fs = require("fs");

fs.writeFile("message.txt", "Hello kub", (err) => {
    if (err) throw err;
    console.log("The file hase benn saved");
});

fs.readFile('message.txt', "utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 