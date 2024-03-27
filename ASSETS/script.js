// Definição das perguntas e respostas
const questionsAndAnswers = [
  { question: "Qual das opções começam com a letra 'A'?", options: ["Abacaxi", "Banana", "Cenoura", "Dente"], correctAnswer: "Abacaxi" },
  { question: "Qual das opções começam com a letra 'B'?", options: ["Amarelo", "Bola", "Cachorro", "Dado"], correctAnswer: "Bola" },
  { question: "Qual das opções começam com a letra 'C'?", options: ["Avião", "Bicicleta", "Carro", "Dinossauro"], correctAnswer: "Carro" },
  { question: "Qual das opções começam com a letra 'D'?", options: ["Barco", "Dado", "Elefante", "Foca"], correctAnswer: "Dado" },
  { question: "Qual das opções começam com a letra 'E'?", options: ["Cobra", "Elefante", "Flor", "Espelho"], correctAnswer: "Elefante" },
];

let username = "";

// Função para iniciar o quiz
function startQuiz() {
  // Obter o nome digitado pelo usuário
  const usernameInput = document.getElementById('username');
  username = usernameInput.value;

  // Verificar se o usuário inseriu um nome
  if (!username.trim()) {
      alert("Por favor, digite seu nome antes de começar o quiz.");
      return;
  }

  // Ocultar tela de entrada de nome e mostrar o quiz
  const nameInput = document.getElementById('name-input');
  nameInput.style.display = 'none';

  const quiz = document.getElementById('quiz');
  quiz.style.display = 'block';

  // Embaralhar as opções de resposta
  questionsAndAnswers.forEach(question => {
      question.options = shuffleArray(question.options);
  });

  // Mostrar a primeira pergunta
  currentQuestionIndex = 0;
  showQuestion();
}

// Função para exibir a próxima pergunta
function nextQuestion() {
  // Verificar se o usuário selecionou uma opção
  const selectedOption = document.querySelector('.option.selected');
  if (!selectedOption) {
      alert("Por favor, selecione uma opção antes de avançar para a próxima pergunta.");
      return;
  }

  // Verificar se a opção selecionada é a correta
  const currentQuestion = questionsAndAnswers[currentQuestionIndex];
  const userAnswer = selectedOption.innerText;
  if (userAnswer === currentQuestion.correctAnswer) {
      // Tocar som de "Acertou" se a resposta estiver correta
      playSound("ACERTOU.mp3");
      // Adicionar classe 'correct' à opção selecionada
      selectedOption.classList.add('correct');
  } else {
      // Tocar som de "Errou" se a resposta estiver errada
      playSound("ERROU.mp3");
      // Adicionar classe 'wrong' à opção selecionada
      selectedOption.classList.add('wrong');
  }

  // Aguardar a animação de piscar
  setTimeout(() => {
    // Remover a classe 'selected' da opção selecionada
    selectedOption.classList.remove('selected');
    // Remover as classes 'correct' e 'wrong' da opção selecionada
    selectedOption.classList.remove('correct');
    selectedOption.classList.remove('wrong');

    // Avançar para a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAndAnswers.length) {
        showQuestion();
    } else {
        // Exibir pontuação final quando todas as perguntas forem respondidas
        showFinalScore();
    }
}, 2000); // Tempo de espera em milissegundos
}

// Função para exibir uma pergunta
function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const currentQuestion = questionsAndAnswers[currentQuestionIndex];

  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = option;
      optionElement.onclick = () => {
          // Selecionar a opção clicada
          const selectedOption = document.querySelector('.option.selected');
          if (selectedOption) {
              selectedOption.classList.remove('selected');
          }
          optionElement.classList.add('selected');
      };
      optionsElement.appendChild(optionElement);
  });
}

// Função para exibir a pontuação final
function showFinalScore() {
  // Ocultar o quiz
  const quiz = document.getElementById('quiz');
  quiz.style.display = 'none';

  // Exibir tela de resultados finais
  const scoreScreen = document.getElementById('score-screen');
  scoreScreen.style.display = 'block';

  // Exibir pontuação final
  const scoreDetails = document.getElementById('score-details');
  const correctAnswers = questionsAndAnswers.filter(question => {
      return question.options.find(option => option === question.correctAnswer) === document.querySelector('.option.selected').innerText;
  }).length;

  scoreDetails.innerText = `${username}, você acertou ${correctAnswers} de ${questionsAndAnswers.length} perguntas.`;
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para reproduzir um som
function playSound(soundFile) {
  const audio = new Audio(`SONS/${soundFile}`);
  audio.play();
}
