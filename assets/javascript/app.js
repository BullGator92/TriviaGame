// initialize the .js document with this. It contains all of the code for the .js file:
$(document).ready(function() {
//start button
// onclick event will hide the start button and display the question page
$("#startButton").on("click", function () {
    $("#startButton").hide();
    $("#gamePage").css("display", "block");
});

// create a countdown timer
// var timeInSecs;
// var ticker;

// function startTimer(secs) {
//     timeInSecs = parseInt(secs) - 1;
//     ticker = setInterval("tick()", 1000);
// }

// function tick() {
//     var secs = timeInSecs;
//     if (secs > 0) {
//         timeInSecs--;
//     } else {
//         clearInterval(ticker);
//     }
//     document.getElementById("timer").innerHTML = secs;
// }
// startTimer(60);  // 60 seconds 

// question array
var game = {
    questions: [
    {
           question: "Who is the lead singer of The Rolling Stones?",
           possibles: ["Randy McMichael", "Ted Nugent", "Mick Jagger"],
           id: 'question-one',
           answer: 1
    }, {
        question: "Who was the lead singer of Led Zeppelin?",
        possibles: ["Robert Plant", "Peter Gabriel", "Artemis Pyle"],
        id: 'question-two',
        answer: 0
    }, {
        question: "Who is the lead singer of The Who?",
        possibles: ["John Paul Jones", "Roger Daltrey", "Joe Perry"],
        id: 'question-three',
        answer: 4
    }, {
        question: "Who is the lead singer of Aerosmith?",
        possibles: ["Steven Tyler", "John Enthwistle", "Roddy Piper"],
        id: 'question-four',
        answer: 1
    },
]};


// These events start the timer: set the number of seconds the guesser has 
var number = 60;
$("#timer").on("click", run);

// This function enables the number of seconds to decrease with time, and to display
// the result of that decrease until time is up. 
function decrement(){
    // Decrease number by one.
    number--;
    // Show the number in the #timeLeft div.
    $("#timer").html('<h2>' + number + " seconds"+'</h2>');
    // When the number is equal to zero, 
    if (number === 0){
    // run the stop function.
    stop();
    // Alert the user that time is up. Update the innerHTML of the message
   // div to say 'Game Over!'
    // alert('Time Up!')
    $("#messageDiv").html("Time/'s up!");
    checkAnswers();
    }
}

//Pseudocode of things that need to be added
//display the questions on the page
//add radio buttons to the answers
//create validation for the following: correct answers, incorrect answers, unanswered questions
// create counters for # of correct answers
// create counter for # of incorrect answers
// create counter for # of unanswered questions
// create functionality for "done" button (stops countdown timer, populates the answer counters)

