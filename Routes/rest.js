const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');

//BodyParser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {res.send("Hi there!")})

module.exports = router;
