const path = require('path');
var express = require("express");
const router = require('express').Router();

var app = express();



app.get("/notes",(req, res) => {
    res.sendFile(path.join(___dirname,"/../public/notes.html"))
}); 


app.get("/",(req, res) => {
    res.sendFile(path.join(___dirname,"/../public/index.html"))
});

module.exports = router;