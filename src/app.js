const express = require("express");
const app = express();


//TODO: Create your GET Request Route Below: 
const restaurantRoute = require("./routes/restaurant")

app.use("/restaurants", restaurantRoute)

app.get("/restaurants/:id", async(req, res) => {
    const id = req.params.id
    const restaurant = await Restaurant.findByPk(id)
    res.json(restaurant)
})
app.post("/restaurants", async (req, res) => {
    const newRest = await Restaurant.create(req.body)
    res.json(newRest)
})
app.put("/restaurants/:id", async (req, res) => {
    const id = req.params.id
    const updateRest = await Restaurant.findByPk(id)
    await updateRest.update(req.body)
    res.json(updateRest)
})
app.delete("/restaurants/:id", async (req, res) => {
    const id = req.params.id
    const deleteRest = await Restaurant.findByPk(id)
    await deleteRest.destroy()
})
module.exports = app;