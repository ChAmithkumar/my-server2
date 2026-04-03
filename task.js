const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express.js!");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.post("/submit", (req, res) => {
    res.send("Form submitted!");
});

app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get("/search", (req, res) => {
    let query = req.query.q;
    res.send(`Search results for: ${query}`);
});

app.get("/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

app.use((req, res, next) => {
    console.log("Time:", new Date().toLocaleTimeString());
    next();
});

app.use(express.static("public"));
