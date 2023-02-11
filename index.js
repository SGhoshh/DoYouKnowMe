/* NeoG Camp levelzero - Mark One
Basic quiz app to test whether you know me
No chalk used*/
var readLineSync = require('readline-sync');
var score=0;

//Function to welcome the user
function welcome(){
  yourName=readLineSync.question("What is your name? ");
  console.log("Welcome "+yourName);
  console.log("I am Soumik, this is a small quiz about me");
  console.log("Good luck");
}

//function to create the game logic
function game(question,correctAnswer){
 userAnswer = readLineSync.question(question);
 if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
   console.log("Correct Answer");
   score++;
   console.log("Current Score: "+score);
 }
  else {
    console.log("Wrong Answer")
  }
}

//function to ask all question one after the other
function askQuestions(){
  for (i=0;i<questionList.length;i++) {
    var currentQuestion=questionList[i].question;
    var currentAnswer=questionList[i].answer;
    game(currentQuestion,currentAnswer)
  }
}

//function to end the game
function endGame(){
  console.log("Your have answered all questions");
  console.log("Your Score is "+score);
  console.log("HIGHSCORES :")
  highScores.map(score => console.log(score.name +" : "+score.score));
  /*the above array.map creates a new array which calls the arrow function score (known as callback function) for every element in the array
  the 'function_name=(parameters) => (function body)'' is a consise way of defining functions called arrow functions'*/
  console.log("If you should be in Highscores ping me and I'll update it");
  score=0;
}

//declaring the array with the question answer sets
var questionList = [
  {
    question: "Where do I live? ",
    answer:"Kolkata",
  },
  
  {
    question: "Which subject am I studying now? ",
    answer: "Physics",
  },
  
  {
    question: "Which year of college am I in right now? ",
    answer: "First",
  },
  
  {
    question: "What is my favourite sport? ",
    answer: "Football",
  },

  {
    question: "What is my favourite dish? ",
    answer: "Biriyani",
  }
];

//keeping highscores
var highScores = [
  {
    name: "Raju",
    score: 5,
  },
  
  {
    name: "Pratap",
    score: 4,
  }
]

welcome()
askQuestions()
endGame()