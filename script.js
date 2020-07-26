//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var funScore = 0;
var creativeScore = 0;
var outgoingScore = 0;
var originalScore = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", outgoingScore);
q1a2.addEventListener("click", originalScore);
q1a3.addEventListener("click", funScore);
q1a4.addEventListener("click", creativeScore);


//#TODO: Define quiz functions here
function fun(){
funScore = "funScore + 1";  
questionCount = "questionCount + 1"; 
}

function creative(){
 creativeScore = "creativeScore + 1";
 questionCount = "questionCount + 1"; 
}

function outgoing(){
 outgoingScore = "outgoingScore + 1";
 questionCount =  "questionCount + 1"; 
}

function original(){
 originalScore = "originalScore + 1";
 questionCount =  "questionCount + 1"; 
}