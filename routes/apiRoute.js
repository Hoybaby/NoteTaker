//post creates data from the database
//delete method, you delete the record from the database
//put updated data from the database
//do not use name to delete, ONLY THE ID. DELETE by ID and UPDATE by ID
const path = require("path");
var express = require("express");
const router = express.Router();
// const cryptoRandomString = require('crypto-random-string'); //this is to make a random string for an ID
const fs = require("fs");

var noteData = require("../db/db.json");
let notesGlobal = 


function savedNotes() {
    console.log("Saved Notes", savedNotesGlobal);
}
// app.get("/notes", function (req, res) {
//                 res.sendFile(path.join(__dirname, "./public/notes.html"));
//                 console.log("Notes by user");
// });

// app.get("/", function (req, res) {
//             res.sendFile(path.join(__dirname, "./public/index.html"));
//             console.log("Main index");
// });

router.get("/api/notes", function (req, res) {

        fs.readFile(noteData, function(err, data) {
            if (err) throw err;
            let allNotes = JSON.parse(data);
            return res.json(allNotes)
        } );


});

router.post("/api/notes", function (req, res) {
    let savedNotes = JSON.stringify(fs.readFileSync("..db/db.json", utf8));
    let ranID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
      };
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: id
    }
    console.log('test1');
    noteData.push(newNote);
    res.json(true);

    fs.writeFileSync(noteData, JSON.stringify(savedNotes), (err) => {
    if(err) throw err;
    console.log("You got an error")
});

    return res.json(savedNotes)
});



router.get("/api/notes", function (req, res) {
    res.json(noteData);
});

router.get("api/notes", (req, res) => {});

module.exports = router;
