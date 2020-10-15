const express = require('express')
const router = express.Router()
const isAuthorized = require('../middleware/isAuthorized')

router.get("/", isAuthorized, (req, res) => {
    res.send(200)
})

module.exports = router;