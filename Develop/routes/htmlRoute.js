const path = require('path');
var express = require("express");
const router = express.Router();



// var app = express();



router.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname,"/../public/notes.html"))
    console.log("note section")
}); 


router.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/../public/index.html"))
    console.log("Your index")
});

module.exports = router;