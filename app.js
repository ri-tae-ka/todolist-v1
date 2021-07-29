//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { fchown } = require("fs");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});



app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});