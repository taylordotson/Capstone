"use strict";

var $ = require('jquery');


let url = 'https://wger.de/api/v2/exerciseinfo/?format=api' +
    'apiKey=a8c9d131a47b1efe4c192699560764b6b11d4087';
var workout;

function getExercises() {
    return $.ajax({
        url: url
    }).done((data) => {
           console.log("hello from exercises");
        workout = data.exercise;
           console.log("hello ", workout);
        return workout;
    });
}

let exerciseName;
var activity;

function showExercise(activity) {
    return $.ajax({
        url: `https://wger.de/api/v2/exerciseinfo/?format=api`

    }).done(function (data) {
        console.log('this is all the data', data);
        console.log("this is the name of Ex", data.results.name);
        exerciseName = data.results.name;
    });
}

module.exports = { getExercises, showExercise };
