const express = require('express');
const passport = require('passport');
const isAuthorized = require('../middleware/isAuthorized');

const router = express.Router();
router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', {
  successRedirect: process.env.CLIENT_URI,
  failureRedirect: `${process.env.CLIENT_URI}/forbidden`,
}), (req, res) => {
  res.send(req.user);
});

router.post('/logout', (req, res) => {
  if (req.user) {
    console.log('Logging out user:', req.user);
    req.logout();
    res.send(200, JSON.stringify({}));
  } else {
    res.redirect('/');
  }
});

router.get('/user', isAuthorized, (req, res) => {
  if (req.user) {
    console.debug(req.user);
    res.send(JSON.stringify(req.user));
  } else {
    res.send(401, 'No current user authenticated');
  }
});

router.get('/check', (req, res) => {
  if (req.user) {
    console.log('checking user');
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
