//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    
    var today = new Date();

    if(today.getDay === 6 || today.getDay === 0) {
        res.send("Yayyy! Its the weekend!");
    } else {
        res.send("Booo! Its a weekday.");
    }

});



app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});