const express = require('express')
const router = express.Router()
const passport = require('passport')
const isAuthorized = require('../middleware/isAuthorized')

router.get("/", passport.authenticate('discord'))

router.get("/redirect", passport.authenticate('discord', {
    successRedirect: process.env.CLIENT_URI + "/dashboard",
    failureRedirect: process.env.CLIENT_URI + "/forbidden"
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
        console.log("checking user")
        res.send(true)
    }
    else {
        res.send(false)
    }
})

module.exports = router;