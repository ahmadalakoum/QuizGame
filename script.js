const easyLevel = document.getElementById("easy");
const mediumLevel=document.getElementById("medium");
const hardLevel=document.getElementById("hard");
const difficulty = document.getElementById("difficultyChoice");
const question = document.getElementById("Question");
const ListOptions = document.getElementById("Listanswers");
const PlayerScore=document.getElementById("score");
const ContainerScore=document.getElementById("scoreContainer");
const timeLeft=document.getElementById("timeLeft");
let totalTime=10;
let counter = 0;
let score = 0;
let nbOfQuestions;
const QuestionsLeft=document.getElementById("remaining-questions");
// array of objects to store the questions.
let questions = [
    // Easy Level (20 questions)
    {
        question: "What is the capital of France?",
        options: ['Paris', 'Beirut', 'Berlin'],
        answer: "Paris",
        difficulty: "easy"
    },
    {
        question: "What is the capital of England?",
        options: ['London', 'Birmingham', 'Manchester'],
        answer: "London",
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
        question: "What is the capital of Japan?",
        options: ['Tokyo', 'Osaka', 'Kyoto'],
        answer: "Tokyo",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Canada?",
        options: ['Ottawa', 'Quebec', 'Montreal'],
        answer: "Ottawa",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Brazil?",
        options: ['Brasília', 'Rio de Janeiro', 'Sao Paulo'],
        answer: "Brasília",
        difficulty: "easy"
    },
    {
        question: "What is the capital of India?",
        options: ['New Delhi', 'Mumbai', 'Kolkata'],
        answer: "New Delhi",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Australia?",
        options: ['Canberra', 'Sydney', 'Melbourne'],
        answer: "Canberra",
        difficulty: "easy"
    },
    {
        question: "What is the capital of South Africa?",
        options: ['Johannesburg', 'Cape Town', 'Pretoria'],
        answer: "Pretoria",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Mexico?",
        options: ['Mexico City', 'Guadalajara', 'Monterrey'],
        answer: "Mexico City",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Argentina?",
        options: ['Buenos Aires', 'Rosario', 'Mar del Plata'],
        answer: "Buenos Aires",
        difficulty: "easy"
    },
    {
        question: "What is the capital of China?",
        options: ['Beijing', 'Shanghai', 'Tianjin'],
        answer: "Beijing",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Egypt?",
        options: ['Cairo', 'Alexandria', 'Giza'],
        answer: "Cairo",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Turkey?",
        options: ['Ankara', 'Istanbul', 'Bursa'],
        answer: "Ankara",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Russia?",
        options: ['Moscow', 'Saint Petersburg', 'Novosibirsk'],
        answer: "Moscow",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Iran?",
        options: ['Tehran', 'Moscow', 'Baghdad'],
        answer: "Tehran",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Chile?",
        options: ['Santiago', 'Valparaiso', 'Buenos Aires'],
        answer: "Santiago",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Peru?",
        options: ['Lima', 'Buenos Aires', 'Quito'],
        answer: "Lima",
        difficulty: "easy"
    },

    // Medium Level (15 questions)
    {
        question: "What is the capital of Nigeria?",
        options: ['Abuja', 'Lagos', 'Kano'],
        answer: "Abuja",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Sweden?",
        options: ['Stockholm', 'Gothenburg', 'Malmo'],
        answer: "Stockholm",
        difficulty: "medium"
    },
    {
        question: "What is the capital of South Korea?",
        options: ['Seoul', 'Busan', 'Incheon'],
        answer: "Seoul",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: ['Riyadh', 'Jeddah', 'Mecca'],
        answer: "Riyadh",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Ukraine?",
        options: ['Kyiv', 'Kharkiv', 'Lviv'],
        answer: "Kyiv",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Indonesia?",
        options: ['Jakarta', 'Surabaya', 'Bandung'],
        answer: "Jakarta",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Kenya?",
        options: ['Nairobi', 'Mombasa', 'Kisumu'],
        answer: "Nairobi",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Argentina?",
        options: ['Buenos Aires', 'Rosario', 'Mar del Plata'],
        answer: "Buenos Aires",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Chile?",
        options: ['Santiago', 'Valparaiso', 'Buenos Aires'],
        answer: "Santiago",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Peru?",
        options: ['Lima', 'Buenos Aires', 'Quito'],
        answer: "Lima",
        difficulty: "medium"
    },
    {
        question: "What is the capital of Japan?",
        options: ['Tokyo', 'Osaka', 'Kyoto'],
        answer: "Tokyo",
        difficulty: "medium"
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

    // Hard Level (12 questions)
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
    },
    {
        question: "What is the capital of Nigeria?",
        options: ['Abuja', 'Lagos', 'Kano'],
        answer: "Abuja",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Sweden?",
        options: ['Stockholm', 'Gothenburg', 'Malmo'],
        answer: "Stockholm",
        difficulty: "hard"
    },
    {
        question: "What is the capital of South Korea?",
        options: ['Seoul', 'Busan', 'Incheon'],
        answer: "Seoul",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: ['Riyadh', 'Jeddah', 'Mecca'],
        answer: "Riyadh",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Ukraine?",
        options: ['Kyiv', 'Kharkiv', 'Lviv'],
        answer: "Kyiv",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Indonesia?",
        options: ['Jakarta', 'Surabaya', 'Bandung'],
        answer: "Jakarta",
        difficulty: "hard"
    },
    {
        question: "What is the capital of Kenya?",
        options: ['Nairobi', 'Mombasa', 'Kisumu'],
        answer: "Nairobi",
        difficulty: "hard"
    }
];

function startGame(difficultyLevel){
    difficulty.innerHTML="";
    timeLeft.textContent=totalTime;
    questions = questions.filter(question => question.difficulty === difficultyLevel);
    nbOfQuestions = questions.length;
    QuestionsLeft.textContent = `Remaining Questions: ${nbOfQuestions}`;
    generateQuestion();
    countdown();
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
    if (counter < questions.length && totalTime>0) {
        question.innerHTML = questions[counter].question;
        ListOptions.innerHTML = '';
        questions[counter].options.forEach(option => {
            let listItem = document.createElement("li");
            listItem.innerHTML = option;
            ListOptions.appendChild(listItem);
        });
     counter++;

    } else{
        question.innerHTML='';
        ListOptions.innerHTML = '';
        PlayerScore.innerHTML = ` Game is Over! your score is ${score}/${questions.length}`;
        const newGame=document.createElement("button");
        newGame.innerHTML="new Game";
        ContainerScore.appendChild(newGame);
        newGame.addEventListener("click",()=>{
            location.reload();
        });
    }
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
    QuestionsLeft.textContent = `Remaining Questions: ${nbOfQuestions - counter}`;
}

function countdown() {
    if (totalTime > 0 && counter < questions.length) {
        timeLeft.innerHTML = `time left: ${totalTime} seconds`;
        totalTime--;
        setTimeout(countdown, 1000);
     } 
    else {
        timeLeft.textContent ='';
        generateQuestion();
    }
}