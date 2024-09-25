const express = require("express")
const router = express.Router()
const Restaurant = require("../../models/index")
const db = require("../../db/connection");

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
// GET all
router.get("/", async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
})
// GET one
router.get("/:id", async(req, res) => {
    const id = req.params.id
    const restaurant = await Restaurant.findByPk(id)
    res.json(restaurant)
})
// CREATE one
router.post("/", async (req, res) => {
    const newRest = await Restaurant.create(req.body)
    res.json(newRest)
})
// UPDATE one
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const updateRest = await Restaurant.findByPk(id)
    await updateRest.update(req.body)
    res.json(updateRest)
})
// DELETE one
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const deleteRest = await Restaurant.findByPk(id)
    await deleteRest.destroy()
})
module.exports = router;