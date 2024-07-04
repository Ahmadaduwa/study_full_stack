import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //ตำแหน่งไฟล์ปัจจุบัน

const app = express();
const port = 3000;
let password = "ILoveProgramming";
let check = 0;


app.use(bodyParser.urlencoded({extended: true}))

function checkPassword(req, res, next){
  console.log(req.body)
  if (req.body.password == password) {
    check = 1;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (check == 1) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/")
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
