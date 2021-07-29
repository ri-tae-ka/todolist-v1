//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { fchown } = require("fs");

const app = express();

app.get("/", function(req, res) {
    
    var a = 5 + 3;
    res.send(a);
});



app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});