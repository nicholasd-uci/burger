// this is basically your ROUTES FOLDER but for HBS //
const router = require('express').Router()
const burger = require('../models/burger.js')


// GET all burgers
router.get('/burgers', (req, res) => {

})

// CREATE one burger
router.post('/burgers', (req, res) => {

})

// UPDATE one burger
router.put('/burgers:id', (req, res) => {

})

// DELETE one burger
router.delete('/burgers:id', (req, res) => {

})

module.exports = router