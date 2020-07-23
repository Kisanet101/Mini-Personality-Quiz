//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", result1);

//#TODO: Define quiz functions here
function result1(){
result1Score = result1Score + 1;  
questionCount =  questionCount + 1; 
}

function result2(){
 result2Score = result2Score + 1;
 questionCount =  questionCount + 1; 
}

function result3(){
 result3Score = result3Score + 1;
 questionCount =  questionCount + 1; 
}

function result4(){
 result4Score = result4Score + 1;
 questionCount =  questionCount + 1; 
}