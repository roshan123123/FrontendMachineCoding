const data = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 2, // The correct answer is "Paris" (index 2)
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1, // The correct answer is "Mars" (index 1)
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    answer: 3, // The correct answer is "Pacific Ocean" (index 3)
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Pb'],
    answer: 0, // The correct answer is "Au" (index 0)
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      'Charles Dickens',
      'Mark Twain',
      'William Shakespeare',
      'Jane Austen',
    ],
    answer: 2, // The correct answer is "William Shakespeare" (index 2)
  },
];

let score = 0;
let currentQuestion = 0;
const container = document.querySelector('.container');
const question = document.querySelector('.question');
const optionsCOntainer = document.querySelector('.options');
const NextButton = document.querySelector('.Next');

NextButton.addEventListener('click', () => {
  currentQuestion++;
  showQuestion(currentQuestion);
  NextButton.style.display = 'none';
});

const showQuestion = (index) => {
  question.innerHTML = '';
  optionsCOntainer.innerHTML = '';

  if (index == data.length) {
    alert('bro your score is ' + score);
  }
  const cnt = document.createElement('span');
  cnt.innerText = 1 + index;
  const questionText = document.createElement('div');
  questionText.innerText = data[index].question;
  question.appendChild(cnt);
  question.appendChild(questionText);
  container.appendChild(question);

  // now make the options button
  data[index].options.forEach((option, index) => {
    const buttonEle = document.createElement('button');
    buttonEle.innerText = option;
    optionsCOntainer.appendChild(buttonEle);
    buttonEle.onclick = function () {
      if (data[index].answer == index) {
        console.log(' this is true ');
        score++;
      } else {
        console.log('this is false');
      }
      NextButton.style.display = 'block';
    };
  });

  container.appendChild(optionsCOntainer);
};

showQuestion(currentQuestion);
