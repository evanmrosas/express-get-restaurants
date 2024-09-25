const express = require("express");
const app = express();


//TODO: Create your GET Request Route Below: 
const restaurantRoute = require("./routes/restaurant")

app.use("/restaurants", restaurantRoute)

app.use("/restaurants/:id", restaurantRoute)

module.exports = app;