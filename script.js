const easyLevel = document.getElementById("easy");
const mediumLevel=document.getElementById("medium");
const hardLevel=document.getElementById("hard");
const difficulty = document.getElementById("difficultyChoice");
const question = document.getElementById("Question");
const ListOptions = document.getElementById("Listanswers");
const PlayerScore=document.getElementById("score");
const ContainerScore=document.getElementById("scoreContainer");
const timeLeft=document.getElementById("timeLeft");
let totalTime=12;
let counter = 0;
let score = 0;
// array of objects to store the questions.
let questions = [
    {
        question: "What is the capital of France?",
        options: ['Paris', 'beirut', 'Berlin'],
        answer: "Paris",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Spain?",
        options: ['Madrid', 'Barcelona', 'London'],
        answer: "Madrid",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Italy?",
        options: ['Rome', 'Venice', 'Florence'],
        answer: "Rome",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Germany?",
        options: ['Berlin', 'Munich', 'Frankfurt'],
        answer: "Berlin",
        difficulty: "easy"
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ['London', 'Birmingham', 'Manchester'],
        answer: "London",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Japan?",
        options: ['Tokyo', 'Osaka', 'Kyoto'],
        answer: "Tokyo",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Mexico?",
        options: ['Mexico City', 'Guadalajara', 'Monterrey'],
        answer: "Mexico City",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Canada?",
        options: ['Ottawa', 'Quebec', 'Montreal'],
        answer: "Ottawa",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Brazil?",
        options: ['Brasília', 'Rio de Janeiro', 'Sao Paulo'],
        answer: "Brasília",
        difficulty: "medium"
    },
    {
        question: "What is the capital of India?",
        options: ['New Delhi', 'Mumbai', 'Kolkata'],
        answer: "New Delhi",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Australia?",
        options: ['Canberra', 'Sydney', 'Melbourne'],
        answer: "Canberra",
        difficulty: "medium"
    },
    {
        question: "What is the capital of South Africa?",
        options: ['Johannesburg', 'Cape Town', 'Pretoria'],
        answer: "Johannesburg",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Turkey?",
        options: ['Ankara', 'Istanbul', 'Bursa'],
        answer: "Ankara",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Egypt?",
        options: ['Cairo', 'Alexandria', 'Giza'],
        answer: "Cairo",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Iran?",
        options: ['Tehran', 'Moscow', 'Baghdad'],
        answer: "Tehran",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Russia?",
        options: ['Moscow', 'Saint Petersburg', 'Novosibirsk'],
        answer: "Moscow",
        difficulty: "hard"
    },
    {
        question: "What is the capital of China?",
        options: ['Beijing', 'Shanghai', 'Tianjin'],
        answer: "Beijing",
        difficulty: "hard"
    }

];
function startGame(difficultyLevel){
    difficulty.innerHTML="";
    timeLeft.textContent=totalTime;
    countdown();
    questions = questions.filter(question => question.difficulty === difficultyLevel);
    generateQuestion();
}
easyLevel.addEventListener("click", () => {
    startGame("easy");
});
mediumLevel.addEventListener("click",()=>{
    startGame("medium");
});
hardLevel.addEventListener("click",()=>{
    startGame("hard");
});


function generateQuestion() {
    if (counter < questions.length) {
        question.innerHTML = questions[counter].question;
        ListOptions.innerHTML = '';
        questions[counter].options.forEach(option => {
            let listItem = document.createElement("li");
            listItem.innerHTML = option;
            ListOptions.appendChild(listItem);
        });
    } else {
        let listItem = document.createElement("li");
        question.innerHTML='';
        ListOptions.innerHTML = '';
        listItem.innerHTML = '';
        PlayerScore.innerHTML = ` Game is Over! your score is ${score}/${questions.length}`;

    }
    counter++;
}

ListOptions.addEventListener("click", (event) => {
    validateAnswer(event.target.innerHTML);
    generateQuestion();
});

function validateAnswer(selectedOption) {
    let answer = questions[counter-1].answer;
    if (selectedOption === answer) {
        score++;
    }
    PlayerScore.textContent = `Score: ${score}/${questions.length}`;
}

function countdown() {
    if (totalTime > 0 && counter < questions.length) {
        timeLeft.textContent = totalTime;
        totalTime--;
        setTimeout(countdown, 1000);
     } 
    else {
        timeLeft.textContent ='';
    }
}