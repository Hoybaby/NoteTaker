var express = require("express");
var path = require('path');
var apiData = require('./db/db.json')
// Tells node that we are creating an "express" server
var app = express();
const fs = require("fs")
const shortId = require('shortid')

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public',)))


// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// var htmlRoutes = require("./routes/htmlRoute");
// app.use("/", htmlRoutes);

// var apiRoutes = require("./routes/apiRoute");
// app.use("/api", apiRoutes);

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public","notes.html"));
  console.log("Notes by user");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname,'public', "index.html"));
  console.log("Main index");
});


// app.get("/api/notes", function(req, res) {

//   res.json(apiData);

// });

app.get("/api/notes", function(req, res) {
  fs.readFile("db/db.json", function(err, data) {
    if (err) throw err;
    let allNotes = JSON.parse(data);
    return res.json(allNotes);
} );
});

app.post("/api/notes", function(req, res) {
  fs.readFile("db/db.json", function(err, data) {
    if (err) throw err;
    let allNotes = JSON.parse(data);
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: shortId.generate()
  }
  console.log('test1');
  allNotes.push(newNote);

  fs.writeFileSync("db/db.json", JSON.stringify(allNotes, null, 2), (err) => {
  if(err) throw err;
  console.log("You got an error")
});
 
} );
});


// fs.writeFileSync(apiData, JSON.stringify(saved))

// let rawdata = fs.readFileSync('./db.json');

// If no matching route is found default to home
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });





// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
