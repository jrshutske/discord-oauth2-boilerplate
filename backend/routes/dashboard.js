const express = require('express');
const isAuthorized = require('../middleware/isAuthorized');

const router = express.Router();

router.get('/', isAuthorized, (req, res) => {
  res.send(200, 'You are authenticated');
});

module.exports = router;
