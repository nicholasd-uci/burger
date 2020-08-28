const router = require('express').Router()

router.use('/api', require('./burgerController.js'))


module.exports = router