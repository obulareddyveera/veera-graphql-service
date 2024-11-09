const express = require("express");
// Create an Express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Veera Checker!");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is the API endpoint!" });
});


// Export the Express app for serverless deployment
module.exports = app;
