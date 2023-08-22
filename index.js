const questions = [
    {
        question: "Who is thte last military president of Nigeria?",
        answers: [
            {text: "Ibrahim Banagida", correct: false},
            {text: "MKO Abiola", correct: false},
            {text: "General Sanni Abacha", correct: false},
            {text: "General Abubakar Salami", correct: true}
        ]
    },
    {
        question: "Where is the first capital of Nigeria?",
        answers: [
            {text: "Lagos", correct: false},
            {text: "Calabar", correct: true},
            {text: "Abuja", correct: false},
            {text: "Oyo", correct: false}
        ]
    },
    {
        question: "Which state is called the Confluence state?",
        answers: [
            {text: "Kogi", correct: true},
            {text: "Delta", correct: false},
            {text: "Akwa Ibom", correct: false},
            {text: "Ebonyi", correct: false}
        ]
    },
    {
        question: "Who was the first Democratically elected president of Nigeria?",
        answers: [
            {text: "Nnamdi Azikiwe", correct: false},
            {text: "MKO Abiola", correct: false},
            {text: "Obafemi Awolowo", correct: false},
            {text: "Olusegun Obasanjo", correct: true}
        ]
    },
    {
        question: "Nigeria is divided into how many geopolitical zones??",
        answers: [
            {text: "four", correct: false},
            {text: "five", correct: false},
            {text: "six", correct: false},
            {text: "ten", correct: false}
        ]
    },
];

//Create vari=able for the elements
const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

//Create variable for the question index and the score
let currentQuestionIndex = 0;
let score = 0;

//Create a function to start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
//Create a function to display the questions
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo +". " + currentQuestion.question;


    //answerBtn.innerHTML = "";
    //Display answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}



startQuiz();