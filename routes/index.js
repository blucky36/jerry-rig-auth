var express = require('express');
var router = express.Router();

router.get('/boi', (req, res) =>  res.json( { 'uid': 1 } ))

module.exports = router;
