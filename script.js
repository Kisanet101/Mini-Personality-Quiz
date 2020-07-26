//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var fun1Score = 0;
var creative2Score = 0;
var outgoing3Score = 0;
var original4Score = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", fun1);

//#TODO: Define quiz functions here
function fun1(){
fun1Score = "fun1Score + 1";  
questionCount = "questionCount + 1"; 
}

function creative2(){
 creative2Score = "creative2Score + 1";
 questionCount = "questionCount + 1"; 
}

function outgoing3(){
 outgoing3Score = "outgoing3Score + 1";
 questionCount =  "questionCount + 1"; 
}

function original4(){
 original4Score = "original4Score + 1";
 questionCount =  "questionCount + 1"; 
}