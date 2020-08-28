// this is basically your ROUTES FOLDER but for HBS //
const router = require('express').Router()
const burger = require('../models/burger.js')


// GET all burgers
router.get('/burgers', (req, res) => {
    burger.getAll(burgers => {
        res.json(burgers)
    })
})

// CREATE one burger
router.post('/burgers', (req, res) => {
    burger.createOne(req.body, id => {
        res.json({ id })
    })
})

// UPDATE one burger
router.put('/burgers/:id', (req, res) => {
    burger.updateOne(req.body, { id: req.params.id }, () => {
        res.sendStatus(200)
    })
})

// DELETE one burger
router.delete('/burgers/:id', (req, res) => {
    burger.deleteOne({ id: req.params.id}, () => {
        res.sendStatus(200)
    })
})

module.exports = router