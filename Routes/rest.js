const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const recommender = require(__dirname + '/../Services/friendsRecommender')

//BodyParser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', loggedinMiddleware, (req, res) => {
  res.render('homepage', {loggedin : true})
})

router.post('/friendsrecommendations', recommender)

module.exports = router;
