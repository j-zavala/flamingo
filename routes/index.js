const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works! Testing hi hi');
});

router.get('/error', (req, res) => {
  res.render('error');
});

module.exports = router;
