//post creates data from the database
//delete method, you delete the record from the database
//put updated data from the database
//do not use name to delete, ONLY THE ID. DELETE by ID and UPDATE by ID
const path = require('path');
var express = require("express");
const router = express.Router();


var noteData = require('../Develop\db\db.json');


router.get('/api/noteData', function (req, res){
    res.json(noteData);
})

router.get('/api/titleData', function ( req, res) {
    res.json(titleData)
})


module.exports = router;