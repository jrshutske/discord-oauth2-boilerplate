const express = require('express')
const router = express.Router()
const passport = require('passport')
const isAuthorized = require('../middleware/isAuthorized')
const CLIENT_URI_SUCCESS = "http://localhost:3000/dashboard"
const CLIENT_URI_FAILED = "http://localhost:3000/forbidden"

router.get("/", passport.authenticate('discord'))

router.get("/redirect", passport.authenticate('discord', {
    successRedirect: CLIENT_URI_SUCCESS,
    failureRedirect: CLIENT_URI_FAILED,
}), (req, res) => {
    res.send(req.user)
})

router.get("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.redirect("/")
    }
    else {
        res.redirect("/")
    }
})

router.get("/user", isAuthorized, (req, res) => {
    if (req.user) {
        res.send(req.user)
    }
    else {
        res.send(null)
    }
})

router.get("/check", (req, res) => {
    if (req.user) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})

module.exports = router;