const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const registerUser = require(__dirname + "/../Services/registerUser");
const loginUser = require(__dirname + "/../Services/loginUser");
const recommender = require(__dirname + "/../Services/friendsRecommender");
const addFriend = require(__dirname + "/../Services/addFriend");
const friendList = require(__dirname + "/../Services/friendList");
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

router.get("/myprofile", (req, res) => {
  if (req.loggedin) res.render("myprofile", { loggedin: req.loggedin });
  else res.render("login", { loggedin: false });
});

router.get("/friendlist", (req, res) => {
  if (req.loggedin) res.render("friendlist", { loggedin: req.loggedin });
  else res.render("login", { loggedin: false });
});

router.post("/register", fileUpload(), urlencodedParser, registerUser);

router.post("/login", urlencodedParser, loginUser);

router.post("/friendsrecommendations", recommender);

router.post("/addfriend", jsonParser, addFriend);

router.post("/friendList", friendList);

module.exports = router;
