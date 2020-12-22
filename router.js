const express = require('express')
const router = express.Router()

// Routes and request handling go here
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router