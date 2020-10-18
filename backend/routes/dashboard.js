const express = require('express')
const router = express.Router()
const isAuthorized = require('../middleware/isAuthorized')

router.get("/", isAuthorized, (req, res) => {
    res.send(200, "You are authenticated")
})

module.exports = router;