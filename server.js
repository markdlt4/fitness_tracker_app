const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const path = require("path");
require("dotenv").config();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const db = require("./models");
const { response } = require("express");

mongoose.connect(process.env.MONGODBX, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// html routes
// crud
/* 
create = post
read = get
update = put
delete = delete
*/

app.get("/", function (require, response) {
  response.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", function (require, response) {
  response.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (require, response) {
  response.sendFile(path.join(__dirname, "./public/stats.html"));
});

// api routes
// according to api.js file

app.get("/api/workouts", function (require, response) {
  db.Workout.find({}).then(function (data) {
    response.json(data);
  });
});

app.put("/api/workouts/:id", function (require, response) {
  db.Workout.findByIdAndUpdate(require.params.id, {
    exercises: require.body,
  }).then(function (data) {
    response.json(data);
  });
});

app.post("/api/workouts", function (require, response) {
  db.Workout.create({}).then(function (data) {
    response.json(data);
  });
});

app.get("/api/workouts/range", function (require, response) {
  db.Workout.find({}).then(function (data) {
    response.json(data);
  });
});

// PATH = 8080
app.listen(process.env.PORT || 8080, function () {
  return console.log("localhost:8080");
});
