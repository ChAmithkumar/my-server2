const express = require("express");
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to My Express Server");
});

app.get("/about", (req, res) => {
    res.send("This is my Express project");
});

app.get("/contact", (req, res) => {
    res.send("Contact: amith@email.com");
});

app.get("/api/users", (req, res) => {
    const users = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Aditi" }
    ];
    res.json(users);
});

// Static files
app.use(express.static("public"));

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});