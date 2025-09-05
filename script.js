const questions = [
  {
    question: "What is the full meaning of HTML? ",
    answers: [
      { text: "Hyper Text Markdown Language", correct: false },
      { text: "Hype Text MarkUp Language", correct: false },
      { text: "Hyper Text MarkUp Langage", correct: false },
      { text: "Hyper Text MarkUp Language", correct: true },
    ],
  },

  {
    question: "What tag is used to create a hyperlink in HTML? ",
    answers: [
      { text: "a", correct: false },
      { text: "link", correct: true },
      { text: "href", correct: false },
      { text: "url", correct: false },
    ],
  },
  {
    question:
      "Which attribute is used to provide an alternative text for an image? ",
    answers: [
      { text: "title", correct: false },
      { text: "alt", correct: true },
      { text: "src", correct: false },
      { text: "text", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define the the largest heading? ",
    answers: [
      { text: "h6", correct: false },
      { text: "heading", correct: false },
      { text: "h1", correct: true },
      { text: "head", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to insert a line break in HTML? ",
    answers: [
      { text: "lb", correct: false },
      { text: "break", correct: false },
      { text: "br", correct: true },
      { text: "line", correct: false },
    ],
  },
  {
    question: "Which tag is used to define a table row in HTML? ",
    answers: [
      { text: "td", correct: false },
      { text: "tr", correct: true },
      { text: "table", correct: false },
      { text: "th", correct: false },
    ],
  },
  {
    question:
      "What is the correct HTML element for inserting a background image? ",
    answers: [
      { text: "background", correct: false },
      { text: "body background='image.jpg'", correct: true },
      { text: "bg img='image.jpg'", correct: false },
      { text: "img background='image.jpg'", correct: false },
    ],
  },
  {
    question: "Which tag is used to display a numbered list? ",
    answers: [
      { text: "ol", correct: true },
      { text: "ul", correct: false },
      { text: "li", correct: false },
      { text: "dl", correct: false },
    ],
  },
  {
    question: " In HTML, which tag is used to create a checkbox? ",
    answers: [
      { text: "input type='radio'", correct: false },
      { text: "checkbox", correct: false },
      { text: "input type='checkbox'", correct: true },
      { text: "check", correct: false },
    ],
  },
  {
    question: "Which tag is used to add a horizontal line in a webpage? ",
    answers: [
      { text: "line", correct: false },
      { text: "hr", correct: true },
      { text: "br", correct: false },
      { text: "border", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerbtns = document.getElementById("answer-button");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerbtns.firstChild) {
    answerbtns.removeChild(answerbtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerbtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function goNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Got ${score} Out of ${questions.length}!!!!!!`;
  nextButton.innerHTML = "Play On 🤩✌";
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    goNext();
  } else {
    startQuiz();
  }
});
startQuiz();
