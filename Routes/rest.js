const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const registerUser = require(__dirname + '/../Services/registerUser')
const loginUser = require(__dirname + '/../Services/loginUser')
const recommender = require(__dirname + '/../Services/friendsRecommender')
const addFriend = require(__dirname + '/../Services/addFriend')
const fetchFriends = require(__dirname + '/../Services/fetchFriends')
const fetchRequests = require(__dirname + '/../Services/fetchRequests')
const fetchProfile = require(__dirname + '/../Services/fetchProfile')

//BodyParser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
  res.render('homepage', {loggedin : req.loggedin})
})

router.get('/register', (req, res) => {
  if (req.loggedin) res.redirect('/')
  else res.render('register', {loggedin : false})
})

router.get('/login', (req, res) => {
  if (req.loggedin) res.redirect('/')
  else res.render('login', {loggedin : false})
})

router.get('/profile/:id', fetchProfile)

router.get('/friendlist/:id', fetchFriends)

router.get('/requestlist/:id', fetchRequests)

router.post('/register', fileUpload(), urlencodedParser, registerUser)

router.post('/login', urlencodedParser, loginUser)

router.post('/friendsrecommendations', recommender)

router.post('/addfriend', jsonParser, addFriend)

module.exports = router;
