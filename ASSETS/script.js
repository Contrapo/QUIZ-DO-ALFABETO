// Array de objetos contendo as perguntas, opções e respostas corretas
const questions = [
  { letter: 'A', options: ['Macaco', 'Jato', 'Carro', 'Avião'], correctAnswer: 'Avião' },
  { letter: 'B', options: ['Cachorro', 'Gato', 'Pássaro', 'Bola'], correctAnswer: 'Bola' },
  { letter: 'C', options: ['Bola', 'Cachorro', 'Buzina', 'Flauta'], correctAnswer: 'Cachorro' },
  { letter: 'D', options: ['Carro', 'Árvore', 'Barco', 'Dado'], correctAnswer: 'Dado' },
  { letter: 'E', options: ['Macaco', 'Gato', 'Elefante', 'Bola'], correctAnswer: 'Elefante' },
  { letter: 'F', options: ['Cachorro', 'Avião', 'Pássaro', 'Fogo'], correctAnswer: 'Fogo' },
  { letter: 'G', options: ['Árvore', 'Gato', 'Carro', 'Bola'], correctAnswer: 'Gato' },
  { letter: 'H', options: ['Helicóptero', 'Flauta', 'Elefante', 'Rinoceronte'], correctAnswer: 'Helicóptero' },
  // Adicione mais perguntas para cada letra do alfabeto
];

// Variável para controlar a pergunta atual
let currentQuestion = 0;

// Array para armazenar as respostas do usuário
let userAnswers = [];

// Variável para armazenar o nome do usuário
let username = '';

// Função para iniciar o quiz
function startQuiz() {
  username = document.getElementById('username').value;
  if (username.trim() === '') {
      alert('Por favor, digite seu nome.');
      return;
  }
  document.getElementById('name-input').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  showQuestion();
}

// Função para exibir a próxima pergunta
function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const question = questions[currentQuestion];

  questionElement.textContent = `Qual das opções abaixo começa com a letra "${question.letter}"?`;

  optionsElement.innerHTML = '';
  question.options.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.onclick = () => selectAnswer(optionElement, option);
      optionsElement.appendChild(optionElement);
  });

  document.getElementById('result').textContent = '';
}

// Função para selecionar a resposta do usuário
function selectAnswer(optionElement, answer) {
  userAnswers[currentQuestion] = answer;
  document.querySelectorAll('.option').forEach(option => {
      option.classList.remove('selected');
  });
  optionElement.classList.add('selected');
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  if (!userAnswers[currentQuestion]) {
      alert('Por favor, selecione uma opção.');
      return;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
      showQuestion();
  } else {
      showScoreScreen();
  }
}

// Função para exibir a tela de pontuação
function showScoreScreen() {
  const scoreDetailsElement = document.getElementById('score-details');
  scoreDetailsElement.innerHTML = '';
  questions.forEach((question, index) => {
      const questionResult = document.createElement('div');
      questionResult.textContent = `Letra ${question.letter} - Sua resposta: ${userAnswers[index]} - ${question.correctAnswer === userAnswers[index] ? 'Correto' : 'Errado'}`;
      scoreDetailsElement.appendChild(questionResult);
  });
  document.getElementById('quiz').style.display = 'none';
  const scoreScreen = document.getElementById('score-screen');
  scoreScreen.style.display = 'block';
  // Adicionando o nome do usuário ao título da tela de pontuação
  scoreScreen.querySelector('h2').textContent = `Resultados de ${username}`;
}
