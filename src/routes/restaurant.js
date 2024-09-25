const express = require("express")
const router = express.Router()
const Restaurant = require(".../models/index")
const db = require("../db/connection");

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get("/", async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

module.exports = router;