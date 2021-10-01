const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

const myQuestions = [
    {
        question: "What is the difference of JavaScript and CSS?",
        answers: {
            a: "JavaScript is an obeject oriented language and CSS is for styling",
            b: "They are exactly the same",
            c: "JavaScript is like html and CSS is for styling",
            d: "JavaScript is use to erase CSS"
        },
        correctAnswer: "a"
    },
    {
        question: "Who created JavaScript?",
        answers: {
            a: "Microsoft",
            b: "Sun Microsystems",
            c: "Oracle",
            d: "Netscape"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is not a resered word in JavaScript?",
        answers: {
            a: "default",
            b: "finally",
            c: "throw",
            d: "undefined"
        },
        correctAnswer: "d"
    },
    {
        question: "JavaScript wasn't always called that. What other names has it been released under?",
        answers: {
            a: "Latte",
            b: "Mocha",
            c: "LiveScript",
            d: "BScript"
        },
        correctAnswer: "b"
    }
];

function buildQuiz(){
  
  nextButton.style.visibility = "visible"
  
    console.log("this function works");
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
    startButton.style.visibility = "hidden"
  }

// on submit, show results
submitButton.addEventListener('click', buildQuiz);