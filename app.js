//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.send("<h1>Yayyy! Its the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }

});



app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});