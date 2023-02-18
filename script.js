// Define the quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "London",
        b: "Paris",
        c: "Madrid"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the largest organ in the human body?",
      answers: {
        a: "Heart",
        b: "Liver",
        c: "Skin"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented the telephone?",
      answers: {
        a: "Thomas Edison",
        b: "Alexander Graham Bell",
        c: "Nikola Tesla"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Earth"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the smallest country in the world?",
      answers: {
        a: "Vatican City",
        b: "Monaco",
        c: "San Marino"
      },
      correctAnswer: "a"
    }
  ];
  
  // Get references to the HTML elements
  const quizForm = document.getElementById("quiz-form");
  const quizResults = document.getElementById("quiz-results");
  
  // Add an event listener to the form
  quizForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the user's answers
    const userAnswers = {
      q1: quizForm.elements.q1.value,
      q2: quizForm.elements.q2.value,
      q3: quizForm.elements.q3.value,
      q4: quizForm.elements.q4.value,
      q5: quizForm.elements.q5.value
    };
  
    // Check the user's answers against the correct answers
    let numCorrect = 0;
    let incorrectAnswers = [];
    for (let i = 0; i < quizQuestions.length; i++) {
      if (userAnswers["q" + (i + 1)] === quizQuestions[i].correctAnswer) {
        numCorrect++;
      } else {
        incorrectAnswers.push(i);
      }
    }
  
    // Calculate the user's score as a percentage
    const score = (numCorrect / quizQuestions.length) * 100;
  
    // Display the user's score and the correct answers to the incorrect questions
    let resultsHTML = `<h2>Your Score: ${score}%</h2>`;
    if (incorrectAnswers.length > 0) {
      resultsHTML += "<h3>Incorrect Answers:</h3>";
      for (let i = 0; i < incorrectAnswers.length; i++) {
        const questionIndex = incorrectAnswers[i];
        const question = quizQuestions[questionIndex];
        const correctAnswer = question.answers[question.correctAnswer];
        resultsHTML += `<p>${i + 1}. ${question.question}</p>`;
        resultsHTML += `<p><strong>Your answer:</strong> ${question.answers[userAnswers["q" + (questionIndex + 1)]]}</p>`;
        resultsHTML += `<p><strong>Correct answer:</strong> ${correctAnswer}</p>`;
      }
    }
    quizResults.innerHTML = resultsHTML;
  });
  