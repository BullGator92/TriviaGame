// initialize the .js document with this. It contains all of the code for the .js file:
$(document).ready(function() {
//start button
// onclick event will hide the start button and display the question page
$("#startButton").on("click", function () {
    $("#startButton").hide();
    $("#gamePage").css("display", "block");
});

// create a countdown timer
var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs) - 1;
    ticker = setInterval("tick()", 1000);
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    } else {
        clearInterval(ticker);
    }
    document.getElementById("timer").innerHTML = secs;
}
startTimer(60);  // 60 seconds 

// question arrays
var answersOne = ["Randy McMichael", "Ted Nugent", "Mick Jagger"];
var answerTwo = ["Robert Plant", "Peter Gabriel", "Artemis Pyle"];
var answerThree = ["John Paul Jones", "Roger Daltrey", "Joe Perry"];
var answerFour = ["Steven Tyler", "John Enthwistle", "Roddy Piper"];


});
