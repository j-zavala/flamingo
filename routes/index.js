const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works! Testing hi hi');
});

router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;
