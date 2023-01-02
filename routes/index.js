var express = require('express');
require('dotenv').config();



const databaseFunctions = require('../database/databaseFunctions');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', {api: process.env.WEBSITE_SITE_NAME})
});




module.exports = router;