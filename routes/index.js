var express = require('express');
require('dotenv').config();

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', {api: process.env.WEBSITE_HOSTNAME})
});




module.exports = router;