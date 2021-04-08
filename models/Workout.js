const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutX = new Schema({
    day: {
        type: Date
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
})

const Exercise = mongoose.model("Workout", WorkoutX);

module.exports = Exercise;