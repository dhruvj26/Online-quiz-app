// Define an array of quiz questions


const physics = [
    {
      question: "Four point charges –Q, –q, 2q and 2Q are placed, one at each corner of the square. The relation between Q and q for which the potential at the centre of the square is zero is :",
      options: ["Q = – q", "Q = – 1/q ", "Q = q", "Q = 1/q"],
      correctAnswer: "Q = – q"
    },
    {
      question: "What is the voltage gain in a common emitter amplifier, where input resistance is 3 W and load resistance 24 W, b = 0.6 ?",
      options: ["8.4", "4.8", "2.4", "480"],
      correctAnswer: "480"
    },
    {
      question: "At a place, if the earth¢s horizontal and vertical components of magnetic fields are equal, then the angle of dip will be",
      options: ["30 \u00B0", "90 \u00B0", "45 \u00B0", "0 \u00B0"],
      correctAnswer: "45 \u00B0"
    },
    {
      question: "The third line of Balmer series of an ion equivalnet to hydrogen atom has wavelength of 108.5 nm. The ground state energy of an electron of this ion will be",
      options: ["3.4eV", "13.6eV", "54.4eV", "122.4eV"],
      correctAnswer: "54.4eV"
    },
    {
      question: "A particle of mass m1 moving with velocity v collides with a mass m2 at rest, then they get embedded. Just after collision, velocity of the system",
      options: ["increases", "decreases", "remains constant", "becomes zero"],
      correctAnswer: "decreases"
    }
];

const chemistry =[
    {
      question: "Which of the following is not a member of chalcogens?",
      options: ["O", "S", "Se", "Po"],
      correctAnswer: "Po"
    },
    {
      question: ". Which of the following element do not form complex with EDTA?",
      options: ["Ca", "Mg", "Be", "Sr"],
      correctAnswer: "Be"
    },
    {
      question: "Which of the following is a diamine?",
      options: ["Dopamine", "Histamine", "Meprobamate", "Chlorphenamine"],
      correctAnswer: "Meprobamate"
    },
    {
      question: "The blue colour of snail is due to presence of",
      options: ["Albumin", "Haemocyanin", "Globulins", "Fibrinogen"],
      correctAnswer: "Haemocyanin"
    },
    {
      question: "pH of a 0.1 M monobasic acid is found to be 2. Hence, its osmotic pressure at a given temperature TK is",
      options: ["0.1RT", "0.11RT", "1.1RT", "0.01RT"],
      correctAnswer: "0.11RT"
    }
];

const maths =[
    {
      question: "If in a frequency distribution, the mean and median are 21 and 22 respectively, then its mode is approximately",
      options: ["25.5", "24.0", "22.0", "20.5"],
      correctAnswer: "24.0"
    },
    {
      question: "In a binomial distribution, the mean is 4 and variance is 3. Then its mode is :",
      options: ["5", "6", "4", "None of these"],
      correctAnswer: "4"
    },
    {
      question: "If the constraints in a linear programming problem are changed then",
      options: ["The problem is to be re-evaluated.", "Solution is not defined.", "The objective function has to be modified.", "The change in constraints is ignored"],
      correctAnswer: "The problem is to be re-evaluated."
    },
    {
      question: "Which of the following statements is correct?",
      options: ["Every L.P.P. admits an optimal solution.", "A L.P.P. admits a unique optimal solution.", "If a L.P.P. admits two optimal solutions, it has an infinite number of optimal solutions", "The set of all feasible solutions of a L.P.P. is not a convex set"],
      correctAnswer: "If a L.P.P. admits two optimal solutions, it has an infinite number of optimal solutions"
    },
    {
      question: "The probability of getting 10 in a single throw of three fair dice is :",
      options: ["1/6", "1/8", "1/9", "1/5"],
      correctAnswer: "1/8"
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 100;
  let timerInterval;

  function Maths(){
    document.getElementById("heading").innerHTML = "Maths Quiz"
      startQuiz(maths);
  }
  function Chemistry(){
    document.getElementById("heading").innerHTML = "Chemistry Quiz"
    startQuiz(chemistry);
  }

  function Physics(){
    document.getElementById("heading").innerHTML = "Physics Quiz"
      startQuiz(physics);
  }
  function startQuiz(quizQuestions) {
    // Hide the start button and display the first question
    displayQuestion(quizQuestions);
    startTimer(quizQuestions);
  }
  
  // Function to display a question and its options
 
  function displayQuestion(quizQuestions) {

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option, quizQuestions);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption, quizQuestions) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < 5) {
      displayQuestion(quizQuestions);
    } else {
      endQuiz(quizQuestions);
    }
  }
  
  // Function to start the timer
  function startTimer(quizQuestions) {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz(quizQuestions);
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz(quizQuestions) {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
    timeLeft = 10
    startTimer(quizQuestions);
    setTimeout(function(){
      location.reload()
    },10000)

  }
  

  
