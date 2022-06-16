const express = require("express");
const asyncify = require('express-asyncify');
const router = express.Router();
const app = asyncify(express());
const request = require("request")
const moment = require('moment');
require('moment-timezone');
const path = require("path");

router.get("/", (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    res.send("API URL");
});

module.exports = router;