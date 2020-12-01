var express = require("express");
var path = require('path');
// var apiData = require('./db/db.json')
// Tells node that we are creating an "express" server
var app = express();
const fs = require("fs");
const shortId = require('shortid');

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public',)))


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// var htmlRoutes = require("./routes/htmlRoute");
// app.use("/", htmlRoutes);

// var apiRoutes = require("./routes/apiRoute");
// app.use("/api", apiRoutes);

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
  
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', "index.html"));

});



app.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", function (err, data) {
    if (err) throw err;
    let allNotes = JSON.parse(data);
    return res.json(allNotes);
  });
});

app.post('/api/notes', function (req, res) {
  fs.readFile("db/db.json", function (err, data) {
    if (err) throw err;
    let allNotes = JSON.parse(data);
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: shortId.generate()
    }
    
    allNotes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(allNotes, null, 2), (err) => {
      if (err) throw err;
      res.send('200') //
    });

   });
});

app.delete('/api/notes/:id', function (req, res) {
  const deletedNotes = req.params.id;
  fs.readFile("db/db.json", function (err, data) {
    if (err) throw err;
    let allNotes = JSON.parse(data);
  
  function searchNotes(deletedNotes, allNotes) {
    for (var i = 0; i < allNotes.length; i++) {
      if (allNotes[i].id === deletedNotes) {
        allNotes.splice(i,1);
      }
    }
  }
  searchNotes(deletedNotes, allNotes);

  fs.writeFile("db/db.json", JSON.stringify(allNotes, null, 2), (err) => {
    if (err) throw err;
    res.send('200') //
  });
    
  });
});







// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
