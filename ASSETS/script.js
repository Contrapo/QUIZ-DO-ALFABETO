// Definição das perguntas e respostas
const questionsAndAnswers = [
  { question: "QUAL DAS FIGURAS COMEÇA COM A LERTRA A ?", 
  options: ["ABACAXI", "BANANA", "CENOURA", "UVA"], 
  correctAnswer: "ABACAXI" },

  { question: "QUAL DAS FIGURAS COMEÇA COM A LERTRA B ?", 
  options: ["PIRULITO", "BOLA", "CACHORRO", "LEÃO"], 
  correctAnswer: "BOLA" },
  
  { question: "QUAL DAS FIGURAS COMEÇA COM A LERTRA C ?", 
  options: ["AVIÃO", "KETCHUP", "CARRO", "XÍCARA"], 
  correctAnswer: "CARRO" },

  { question: "QUAL DAS FIGURAS COMEÇA COM A LERTRA D ?", 
  options: ["BARCO", "DADO", "ELEFANTE", "FOCA"], 
  correctAnswer: "DADO" },

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA E ?", 
  options: ["COBRA", "ELEFANTE", "FLOR", "HELICÓPTERO"], 
  correctAnswer: "ELEFANTE" },
  
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA F ?", 
  options: [ "CAMINHÃO", "GARRAFA", "TECLADO", "FITA"],
  correctAnswer: "FITA" },

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA G ?", 
  options: ["GATO", "PASSÁRO", "CACHORRO", "RATO"],
  correctAnswer: "GATO" },

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA H ?", 
  options: ["MOUSE", "CADERNO", "HAMBÚRGUER", "DENTE"],
  correctAnswer: "HAMBÚRGUER"},
  
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA I ?", 
  options: ["ESTRELA", "CADERNO", "MOTO", "IGREJA"],
  correctAnswer: "IGREJA"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA J ?", 
  options: ["BOLO", "CELULAR", "COMPUTADOR", "JATO"],
 correctAnswer: "JATO"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA K ?",
  options: ["PENTE", "KETCHUP", "ÁGUA", "IGREJA"],
  correctAnswer: "KETCHUP"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA L ?", 
  options: ["TERRA", "TIJOLO" ,"SUCO" ,"LUA"],
  correctAnswer: "LUA"},
 
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA M ?", 
  options: ["SOFA", "TELEVISÃO", "NOTEBOOK", "MACARRÃO"],
  correctAnswer: "MACARRÃO"},
 
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA N ?", 
  options: ["NARIZ", "COELHO", "ACAMPAMENTO", "IGREJA"],
  correctAnswer: "NARIZ"}, 

  { question: "QQUAL DAS FIGURAS COMEÇA COM A LETRA O ?", 
  options: ["OLHO", "CAMA", "COBERTOR", "TRAVESSEIRO"],
  correctAnswer: "OLHO"},  

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA P ?", 
  options: ["CACTO", "PATO", "URSO", "SABONETE"],
  correctAnswer: "PATO"},

  {question: "QUAL DAS FIGURAS COMEÇA COM A LETRA Q ?", 
  options: ["CACHOEIRA", "RÁDIO", "QUEIJO", "CAFÉ"],
  correctAnswer: "QUEIJO"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA R ?", 
  options: ["BANCO", "LANTERNA", "BARCO", "RATO"],
  correctAnswer: "RATO"}, 

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA S ?", 
  options: ["CAVALO", "LOBO", "SEREIA", "CASA"],
  correctAnswer: "SEREIA"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA T ?", 
  options: ["CONTROLE", "SOL", "BOTÃO", "TATU"],
  correctAnswer: "TATU"},
 
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA U ?", 
  options: ["URSO", "TELEVISÃO", "ÁGUA", "IGREJA"],
  correctAnswer: "URSO"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA V ?", 
  options: ["VACA", "LIQUIDIFICADOR", "RÁDIO", "LIVRO"],
  correctAnswer: "VACA"},
 
  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA W ?", 
  options: ["CAMA", "CELULAR", "TECLADO", "WEBCAM"],
  correctAnswer: "WEBCAM"}, 

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA X ?", 
  options: ["XÍCARA", "TELEVISÃO", "CARRO", "MESA"],
  correctAnswer: "XÍCARA"}, 

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA Y ", 
  options: ["PERFUME", "FACEBOOK", "NUVEMS", "YOUTUBE"],
  correctAnswer: "YOUTUBE"},

  { question: "QUAL DAS FIGURAS COMEÇA COM A LETRA Z ?", 
  options: ["URSO", "TIGRE", "ARROZ", "ZEBRA"],
  correctAnswer: "ZEBRA"},
  
];

// Variáveis globais
let username = "";
let currentQuestionIndex = 0;
let correctAnswerIndices = [];

function BotaoPlay() {
  // Seleciona os elementos
  var TelaPlayJanela = document.getElementById('TelaPlayJanela');
  var JanelaNome = document.getElementById('JanelaNome');
  var BLOCOS = document.getElementById('BLOCOS');
  
  // Faz o botão sumir
  TelaPlayJanela.style.display = 'none';
  
  // Faz a janela do nome aparecer
  JanelaNome.classList.remove('hidden');

  // Faz os bloquinhos de letras sumirem
  BLOCOS.classList.add('hidden');
}

// Função para iniciar o quiz
function startQuiz() {
  // Obter o nome digitado pelo usuário
  const usernameInput = document.getElementById('username');
  username = usernameInput.value;

  // Verificar se o usuário inseriu um nome
  if (!username.trim()) {
    
    Toastify({
      text: "Você precisa escrever seu nome!",
      duration: 2000,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#81007b",
      },
    }).showToast();

    return;
  }

  var QuizTodo = document.getElementById('Quiz-Todo');
  QuizTodo.classList.remove('hidden');
  JanelaNome.classList.add('hidden');

  // Ocultar tela de entrada de nome e mostrar o quiz
  const nameInput = document.getElementById('name-input');
  nameInput.style.display = 'none';

  const quiz = document.getElementById('quiz');
  quiz.style.display = 'block';

  // Desocultar a div .janela-quiz caso o jogo tenha reiniciado
  const janelaQuiz = document.querySelector('.janela-quiz');
  janelaQuiz.style.display = 'flex';

  // Embaralhar as opções de resposta
  questionsAndAnswers.forEach(question => {
      question.options = shuffleArray(question.options);
  });

  // Mostrar a primeira pergunta
  showQuestion();
}

// Função para exibir a próxima pergunta
function nextQuestion() {
  // Verificar se o usuário selecionou uma opção
  const selectedOption = document.querySelector('.option.selected');
  if (!selectedOption) {
    
    Toastify({
      text: "Você precisa escolher uma das opções!",
      duration: 2000,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#ff4545",
      },
    }).showToast();

      return;
  }

  // Adicionar classe 'flip' para animação de virar a opção selecionada
  selectedOption.classList.add('flip');

  // Aguardar a animação de flip
  setTimeout(() => {
    // Mostrar o texto escondido da alternativa
    const backElement = selectedOption.querySelector('.back');
    backElement.style.display = 'block';

    // Verificar se a opção selecionada é a correta
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    const userAnswer = selectedOption.querySelector('img').alt; // Obtém o texto da opção selecionada
    if (userAnswer === currentQuestion.correctAnswer) {
        // Tocar som de "Acertou" se a resposta estiver correta
        playSound("ACERTOU.mp3");
        // Adicionar classe 'correct' à opção selecionada
        selectedOption.classList.add('correct');
        // Salvar o índice da pergunta respondida corretamente
        correctAnswerIndices.push(currentQuestionIndex);
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
        // Remover a classe 'flip' após a animação de virar
        selectedOption.classList.remove('flip');

        // Avançar para a próxima pergunta
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsAndAnswers.length) {
            showQuestion();
        } else {
            // Exibir pontuação final quando todas as perguntas forem respondidas
            showFinalScore();
        }
    }, 1500); // Tempo de espera em milissegundos
  }, 800); // Tempo de espera em milissegundos, ajuste conforme necessário
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
      optionElement.classList.add('option', 'flip-container');
      const flipperElement = document.createElement('div');
      flipperElement.classList.add('flipper');

      const frontElement = document.createElement('div');
      frontElement.classList.add('front');
      const optionImage = new Image();
      optionImage.src = `IMAGENS/QUIZ/${option}.png`;
      optionImage.alt = option;
      optionImage.dataset.text = option; // Armazena o texto da opção
      frontElement.appendChild(optionImage);

      const backElement = document.createElement('div');
      backElement.classList.add('back');
      backElement.innerText = option;
      backElement.style.display = 'none'; // Esconde o texto inicialmente

      flipperElement.appendChild(frontElement);
      flipperElement.appendChild(backElement);
      optionElement.appendChild(flipperElement);

      optionElement.addEventListener('click', () => selectOption(optionElement));
      optionsElement.appendChild(optionElement);
  });

  // Atualizar a barra de progresso
  updateProgressBar();
}

// Função para selecionar uma opção
function selectOption(optionElement) {
  const selectedOption = document.querySelector('.option.selected');
  if (selectedOption) {
      selectedOption.classList.remove('selected');
  }
  optionElement.classList.add('selected');
}

// Função para exibir a pontuação final
function showFinalScore() {

  // Atualizar a barra de progresso
  updateProgressBar();

  playSound("PALMAS.mp3");
  
  // Ocultar o quiz
  const quiz = document.getElementById('quiz');
  quiz.style.display = 'none';

  // Exibir tela de resultados finais
  const scoreScreen = document.getElementById('score-screen');
  scoreScreen.style.display = 'block';

  // Exibir pontuação final
  const scoreDetails = document.getElementById('score-details');
  scoreDetails.innerText = `${username}, você acertou ${correctAnswerIndices.length} de ${questionsAndAnswers.length} perguntas.`;
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function restartQuiz() {
  // Reiniciar as variáveis
  username = "";
  currentQuestionIndex = 0;
  correctAnswerIndices = [];

  // Ocultar tela de resultados finais e mostrar a tela de entrada de nome novamente
  const scoreScreen = document.getElementById('score-screen');
  scoreScreen.style.display = 'none';
  
  const nameInput = document.getElementById('name-input');
  nameInput.style.display = 'block';

  // Mostrar a tela de play novamente
  const TelaPlayJanela = document.getElementById('TelaPlayJanela');
  TelaPlayJanela.style.display = 'block';

  // Desocultar a div .janela-quiz caso o jogo tenha reiniciado
  const janelaQuiz = document.querySelector('.janela-quiz');
  janelaQuiz.style.display = 'none';

  BLOCOS.classList.remove('hidden');
}

// Função para reproduzir um som
function playSound(soundFile) {
  const audio = new Audio(`SONS/${soundFile}`);
  audio.play();
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progress = (currentQuestionIndex / questionsAndAnswers.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Lógica para avançar para a próxima pergunta
function nextQuestion() {
  // Verificar se o usuário selecionou uma opção
  const selectedOption = document.querySelector('.option.selected');
  if (!selectedOption) {
    
    Toastify({
      text: "Você precisa escolher uma das opções!",
      duration: 2000,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#ff4545",
      },
    }).showToast();

    return;
  }

  // Adicionar classe 'flip' para animação de virar a opção selecionada
  selectedOption.classList.add('flip');

  // Aguardar a animação de flip
  setTimeout(() => {
    // Mostrar o texto escondido da alternativa
    const backElement = selectedOption.querySelector('.back');
    backElement.style.display = 'block';

    // Verificar se a opção selecionada é a correta
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    const userAnswer = selectedOption.querySelector('img').alt; // Obtém o texto da opção selecionada
    if (userAnswer === currentQuestion.correctAnswer) {
      // Tocar som de "Acertou" se a resposta estiver correta
      playSound("ACERTOU.mp3");
      // Adicionar classe 'correct' à opção selecionada
      selectedOption.classList.add('correct');
      // Salvar o índice da pergunta respondida corretamente
      correctAnswerIndices.push(currentQuestionIndex);
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
      // Remover a classe 'flip' após a animação de virar
      selectedOption.classList.remove('flip');

      // Avançar para a próxima pergunta
      currentQuestionIndex++;
      if (currentQuestionIndex < questionsAndAnswers.length) {
        showQuestion();
      } else {
        // Exibir pontuação final quando todas as perguntas forem respondidas
        showFinalScore();
      }
    }, 1500); // Tempo de espera em milissegundos
  }, 800); // Tempo de espera em milissegundos, ajuste conforme necessário
}

