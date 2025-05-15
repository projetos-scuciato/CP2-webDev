// Cars keys and descriptions
const cars = {
  EQE: {
    name: "Mercedes EQE Sedan",
    description: "Luxo, conforto e tecnologia alemã que combinam elegância e sustentabilidade.",
  },
  BYD: {
    name: "BYD HAN",
    description: "Alta performance e tecnologia inovadora de uma marca chinesa em ascensão.",
  },
  HONDA: {
    name: "Honda P7",
    description: "Design moderno e confiabilidade japonesa, ideal para quem busca qualidade e inovação.",
  },
  TESLA: {
    name: "Tesla Model S",
    description: "Tecnologia futurista e autonomia líder do mercado para quem quer o topo do elétrico.",
  },
};

// Questions array - each has question text and answers mapped to cars
const questions = [
  {
    question: "Qual destes valores é mais importante para você na escolha de um carro?",
    answers: [
      { text: "Luxo e conforto incomparáveis", car: "EQE" },
      { text: "Alta tecnologia e performance", car: "BYD" },
      { text: "Confiabilidade e design moderno", car: "HONDA" },
      { text: "Tecnologia inovadora líder de mercado", car: "TESLA" },
    ],
  },
  {
    question: "Qual estilo de direção você prefere?",
    answers: [
      { text: "Condução suave e relaxante", car: "EQE" },
      { text: "Esportiva e emocionante", car: "BYD" },
      { text: "Equilibrada e estável", car: "HONDA" },
      { text: "Potente e rápida aceleração", car: "TESLA" },
    ],
  },
  {
    question: "O que mais valoriza em um sistema de entretenimento do carro?",
    answers: [
      { text: "Interface sofisticada e intuitiva", car: "EQE" },
      { text: "Recursos avançados e conectividade", car: "BYD" },
      { text: "Facilidade de uso e confiabilidade", car: "HONDA" },
      { text: "Atualizações frequentes over-the-air", car: "TESLA" },
    ],
  },
  {
    question: "Qual é o seu principal uso para o carro?",
    answers: [
      { text: "Viagens longas com bastante conforto", car: "EQE" },
      { text: "Dirigir com performance na cidade e estrada", car: "BYD" },
      { text: "Uso diário prático e confiável", car: "HONDA" },
      { text: "Tecnologia e autonomia para viagens longas", car: "TESLA" },
    ],
  },
  {
    question: "Quando pensa em segurança, o que é mais importante para você?",
    answers: [
      { text: "Sistemas avançados de assistência ao motorista", car: "EQE" },
      { text: "Alta performance com segurança garantida", car: "BYD" },
      { text: "Segurança confiável e comprovada", car: "HONDA" },
      { text: "Autopilot e segurança inovadora", car: "TESLA" },
    ],
  },
  {
    question: "Qual aspecto do design automotivo mais te atrai?",
    answers: [
      { text: "Elegância clássica e linhas refinadas", car: "EQE" },
      { text: "Estilo esportivo e arrojado", car: "BYD" },
      { text: "Design clean e funcional", car: "HONDA" },
      { text: "Futurista e minimalista", car: "TESLA" },
    ],
  },
  {
    question: "Em relação a eficiência energética, o que você espera?",
    answers: [
      { text: "Equilíbrio perfeito entre desempenho e economia", car: "EQE" },
      { text: "Performance elétrica potente e eficiente", car: "BYD" },
      { text: "Consumo eficiente e econômico", car: "HONDA" },
      { text: "Bateria de longa duração e recargas rápidas", car: "TESLA" },
    ],
  },
  {
    question: "Qual é o seu orçamento aproximado para o carro?",
    answers: [
      { text: "Acima de R$ 500.000 (Luxo premium)", car: "EQE" },
      { text: "Entre R$ 300.000 e R$ 450.000", car: "BYD" },
      { text: "Entre R$ 250.000 e R$ 350.000", car: "HONDA" },
      { text: "Acima de R$ 600.000 (Tecnologia topo)", car: "TESLA" },
    ],
  },
  {
    question: "Quanto você valoriza o suporte e pós-venda?",
    answers: [
      { text: "Serviço premium e assistência completa", car: "EQE" },
      { text: "Suporte tecnológico rápido e eficiente", car: "BYD" },
      { text: "Assistência ampla e confiável", car: "HONDA" },
      { text: "Atualizações frequentes e suporte remoto", car: "TESLA" },
    ],
  },
  {
    question: "Qual fator mais te atrai em um carro elétrico?",
    answers: [
      { text: "Sofisticação e inovação", car: "EQE" },
      { text: "Tecnologia e alta performance", car: "BYD" },
      { text: "Confiabilidade e praticidade", car: "HONDA" },
      { text: "Autonomia e recursos avançados", car: "TESLA" },
    ],
  },
];

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultDiv = document.getElementById('result');
const startContainer = document.getElementById('start-container');

let currentQuestionIndex = 0;
let scores = { EQE: 0, BYD: 0, HONDA: 0, TESLA: 0 };
let selectedAnswer = null;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
  if (selectedAnswer !== null) {
    // Increment score of previously selected answer
    scores[selectedAnswer]++;
    selectedAnswer = null;
    currentQuestionIndex++;
    setNextQuestion();
  }
});

function startQuiz() {
  startContainer.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  currentQuestionIndex = 0;
  scores = { EQE: 0, BYD: 0, HONDA: 0, TESLA: 0 };
  selectedAnswer = null;
  nextBtn.disabled = true;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(questionObj) {
  document.getElementById('question').textContent = questionObj.question;
  questionObj.answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('answer');
    button.textContent = answer.text;
    button.dataset.car = answer.car;
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextBtn.disabled = true;
  // Remove all answer buttons
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  selectedAnswer = null;
}

function selectAnswer(e) {
  const chosenCar = e.target.dataset.car;

  // Unselect all other buttons
  Array.from(answerButtons.children).forEach(button => {
    button.style.backgroundColor = '#e7e7e7';
    button.style.color = '#333';
    button.style.borderColor = '#28a745';
  });

  // Highlight selected button
  e.target.style.backgroundColor = '#28a745';
  e.target.style.color = '#fff';
  e.target.style.borderColor = '#28a745';

  selectedAnswer = chosenCar;
  nextBtn.disabled = false;
}

function showResult() {
  questionContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  let maxScore = -1;
  let bestCars = [];
  for (const car in scores) {
    if (scores[car] > maxScore) {
      maxScore = scores[car];
      bestCars = [car];
    } else if (scores[car] === maxScore) {
      bestCars.push(car);
    }
  }

  let resultHTML = "";
  if (bestCars.length === 1) {
    const carKey = bestCars[0];
    resultHTML = `<div>O carro ideal para você é: <span id="car-name">${cars[carKey].name}</span></div>
                  <div id="car-description">${cars[carKey].description}</div>`;
  } else {
    resultHTML = `<div>Você combinou com mais de um carro! Veja suas opções:</div>`;
    bestCars.forEach(carKey => {
      resultHTML += `<div style="margin-top: 15px;font-weight: 700; color:#28a745;">${cars[carKey].name}</div>
                     <div>${cars[carKey].description}</div>`;
    });
  }

  resultDiv.innerHTML = resultHTML;
}

document.getElementById('restart-btn').addEventListener('click', () => {
  resultContainer.classList.add('hidden');
  startContainer.classList.remove('hidden');
});

