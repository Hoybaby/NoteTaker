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


require("./routes/apiRoute")(app);
// require("./routes/htmlRoutes")(app);




// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
