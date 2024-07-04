import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("<h1>Hellosdd</h1> <a href='/about'>Contact</a> <a href='/contact'>about</a>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contacy</h1> <p>092370854</p>");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
