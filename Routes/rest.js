const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const loggedinMiddleware = require(__dirname + '/../Middlewares/isLoggedin')

//BodyParser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', loggedinMiddleware, (req, res) => {
  res.render('homepage', {loggedin : req.isLoggedin})
})

module.exports = router;
