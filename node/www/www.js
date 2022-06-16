const express = require("express");
const asyncify = require('express-asyncify');
const app = asyncify(express());
app.use('/static', express.static(__dirname + '/static'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/plugin', express.static(__dirname + '/plugin'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/calendar", (req, res) => {
    res.sendFile(__dirname + '/calendar.html');
});

app.get("/test", (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

module.exports = app;