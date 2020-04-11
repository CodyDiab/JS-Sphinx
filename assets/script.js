//delare var. quiz container,questions, start button?
 var questions =[
     {
         question:"What is a Node in JavaScript?",
         choices:{

         choiceA:"HTML Element",
         choiceB:"CSS Style",
         choiceC:"JS Function"
         },
         correct: 'A'
     },{
         question: "What is a iterator?",
         choices:{
         choiceA:"A way to close a loop",
         choiceB:"An object that defines a sequence",
         choiceC:"a way to start a function"
         },
         correct: 'B'
     },{
         question: "What is the function to add an element to the end of an array? ",
         choices:{
         choiceA:"unshift",
         choiceB:"math.random",
         choiceC:"push"
         },
         correct: 'C'
     },{
         question: "What would be the result of 9+9+'12'?",
         choices:{
         choiceA:"30",
         choiceB:"912",
         choiceC:"1812"
         },
         correct: 'C'

     },{
         question: "what does the function math.floor do?",
         choices:{
         choiceA:"round number DOWN to the nearest whole number",
         choiceB:"round number UP ro the nearest whole number",
         choiceC: "provide the MEAN of a group of integers"
         },
         correct: 'A'
     }

 ]

 

// var quizContent=document.querySelector("#quiz-content")
//  var quizBoxEl = document.createElement("div").className = "quiz-box"

var score = 0;
var quizPitch= document.getElementById("quiz-content")
var startButton = document.getElementById("start-button-container");
var choiceOne =  document.getElementById("A");
var choiceTwo = document.getElementById("B");
var choiceThree = document.getElementById("C");
let currentQuestion = 0;
let lastQuestion = questions.length-1


    
       
function displayQuestion(){
    
     let q = questions[currentQuestion]
     document.getElementById("question").innerHTML = "<p>" + q.question + "</p>";
   
     
    
 
    choiceOne.innerHTML="<p> 'A'  " + q.choices.choiceA + "</p>";
    choiceTwo.innerHTML="<p> 'B'  " + q.choices.choiceB + "</p>";
    choiceThree.innerHTML="<p> 'C'  " + q.choices.choiceC + "</p>";
    // choiceOne.addEventListener("click",checkAnswer('A'))
    // choiceTwo.addEventListener("click",checkAnswer('B'))
    // choiceThree.addEventListener("click",checkAnswer('C'))
}

function displayScore(){
quizPitch.setAttribute("style","display:none")
console.log(score)
}
 
function start(){
    
    
    
    startButton.setAttribute("style","display:none");
    document.getElementsByClassName("score").textContent="Your current score is"  + score + " !";
    displayQuestion();

    
   
    }
    



function checkAnswer(answer){
   
    if(answer== questions[currentQuestion].correct){
        score++
        alert("Correct!")
    }else{
        alert("Incorrect!")
    }
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        start()
    }else{

    }
}


//  var checkAnswer = function(answer){
//     if(answer===questions[i].correct){
//         score++
//         alert("Correct!")
//     }else{
//         alert("Incorrect!")
//     }


 
 

// var checkAnswer = function(answer){
    
//     if (answer === questions.correct) {

//         score++
//         alert("Correct!")
//         return true
//     }else{
//         alert("Incorecct!")
//         return false
//     }


// } 

//create loop to cycle through questions

//setInterval for timer

//call functions
