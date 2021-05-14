//answers//
var answer1 = document.getElementById('answer-1');
var answer2 = document.getElementById('answer-2');
var answer3 = document.getElementById('answer-3');
var answer4 = document.getElementById('answer-4');
var answer5 = document.getElementById('answer-5');
//question//
var question1 = document.getElementById('quest-1');
var question2 = document.getElementById('quest-2');
var question3 = document.getElementById('quest-3');
var question4 = document.getElementById('quest-4');
var question5 = document.getElementById('quest-5');
//exits//
var exit1 = document.getElementById('quest-ex1');
var exit2 = document.getElementById('quest-ex2');
var exit3 = document.getElementById('quest-ex3');
var exit4 = document.getElementById('quest-ex4');
var exit5 = document.getElementById('quest-ex5');

//functions1//
question1.onclick = function() {
    answer1.style.display = "inline-block";
    question1.style.display = "none";
    exit1.style.display = "block";
}
exit1.onclick = function() {
    answer1.style.display = "none";
    question1.style.display = "block";
    exit1.style.display = "none";
}

//functions2//
question2.onclick = function() {
    answer2.style.display = "inline-block";
    question2.style.display = "none";
    exit2.style.display = "block";
}
exit2.onclick = function() {
    answer2.style.display = "none";
    question2.style.display = "block";
    exit2.style.display = "none";
}

//functions3//
question3.onclick = function() {
    answer3.style.display = "inline-block";
    question3.style.display = "none";
    exit3.style.display = "block";
}
exit3.onclick = function() {
    answer3.style.display = "none";
    question3.style.display = "block";
    exit3.style.display = "none";
}

//functions4//
question4.onclick = function() {
    answer4.style.display = "inline-block";
    question4.style.display = "none";
    exit4.style.display = "block";
}
exit4.onclick = function() {
    answer4.style.display = "none";
    question4.style.display = "block";
    exit4.style.display = "none";
}

//functions5//
question5.onclick = function() {
    answer5.style.display = "inline-block";
    question5.style.display = "none";
    exit5.style.display = "block";
}
exit5.onclick = function() {
    answer5.style.display = "none";
    question5.style.display = "block";
    exit5.style.display = "none";
}