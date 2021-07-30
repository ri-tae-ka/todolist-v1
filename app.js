//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleString("en-us", options);

    res.render("list", {
        kindOfDay: day
    });

});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    console.log(item);
})

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});