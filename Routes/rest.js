const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const registerUser = require(__dirname + "/../Services/registerUser");
const loginUser = require(__dirname + "/../Services/loginUser");
const recommender = require(__dirname + "/../Services/friendsRecommender");
const addFriend = require(__dirname + "/../Services/addFriend");
const fetchFriends = require(__dirname + "/../Services/fetchFriends");
const fetchRequests = require(__dirname + "/../Services/fetchRequests");
const fetchProfile = require(__dirname + "/../Services/fetchProfile");
const acceptRequest = require(__dirname + "/../Services/acceptRequest");
const declineRequest = require(__dirname + "/../Services/declineRequest");

//BodyParser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", (req, res) => {
  res.render("homepage", { loggedin: req.loggedin });
});

router.get("/register", (req, res) => {
  if (req.loggedin) res.redirect("/");
  else res.render("register", { loggedin: false });
});

router.get("/login", (req, res) => {
  if (req.loggedin) res.redirect("/");
  else res.render("login", { loggedin: false });
});

router.get("/profile", fetchProfile);

router.get("/friendlist", (req, res, next) => {
  if (!req.loggedin) res.redirect("/");
  else return next()
}, fetchFriends);

router.get("/requestlist", (req, res, next) => {
  if (!req.loggedin) res.redirect("/");
  else return next()
}, fetchRequests);


router.post("/register", fileUpload(), urlencodedParser, registerUser);

router.post("/login", urlencodedParser, loginUser);

router.post("/register", fileUpload(), urlencodedParser, registerUser);

router.post("/friendsrecommendations", recommender);

router.post("/addfriend", jsonParser, addFriend);

router.post("/acceptrequest", jsonParser, acceptRequest, declineRequest);

router.post("/declinerequest", jsonParser, declineRequest);

module.exports = router;
