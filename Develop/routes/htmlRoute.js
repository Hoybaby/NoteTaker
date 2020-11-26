const path = require('path');

const router = require('express').Router();



app.get("/note",(req, res) => {
    res.sendFile(path.join(___dirname,"../public/notes.html"))
}); 


app.get("/",(req, res) => {
    res.sendFile(path.join(___dirname,"../public/index.html"))
});

module.export = router;