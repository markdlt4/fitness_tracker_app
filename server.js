const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const path = require("path");

app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const db = require("./models");

mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// html routes
// crud 
/* 
create = put
read = get
update = post
delete = delete
*/

app.get('/', function(require, response){
    response.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/exercise', function(require, response){
    response.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get('/stats', function(require, response){
    response.sendFile(path.join(__dirname, "./public/stats.html"));
});


// PATH = 8080
app.listen(process.env.PORT || 8080, function() {
    return console.log("localhost:8080");
})