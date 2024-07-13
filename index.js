const container = document.querySelector(".container")
const questionBox = document.querySelector(".question")
const choicesBox = document.querySelector(".choices")
const nextBtn = document.querySelector(".nextBtn")
const scoreCard = document.querySelector(".scoreCard")
const alert = document.querySelector('.alert')
const startBtn = document.querySelector('.startBtn')
const timer = document.querySelector('.timer')
const skipBtn = document.querySelector('.skipBtn');


const quiz = [
    {
        question: "What is the national currency of the United States?",
        choices: ["Dollar", "Euro", "Pound", "Yen"],
        answer: "Dollar"
    },
    {
        question: "What is the national currency of the United Kingdom?",
        choices: ["Pound", "Euro", "Dollar", "Franc"],
        answer: "Pound"
    },
    {
        question: "What is the national currency of Japan?",
        choices: ["Yen", "Won", "Dollar", "Yuan"],
        answer: "Yen"
    },
    {
        question: "What is the national currency of Canada?",
        choices: ["Dollar", "Euro", "Peso", "Rupee"],
        answer: "Dollar"
    },
    {
        question: "What is the national currency of Australia?",
        choices: ["Dollar", "Pound", "Euro", "Rupee"],
        answer: "Dollar"
    },
    {
        question: "What is the national currency of India?",
        choices: ["Rupee", "Dollar", "Euro", "Yen"],
        answer: "Rupee"
    },
    {
        question: "What is the national currency of China?",
        choices: ["Yuan", "Yen", "Won", "Dollar"],
        answer: "Yuan"
    },
    {
        question: "What is the national currency of Russia?",
        choices: ["Ruble", "Euro", "Dollar", "Yen"],
        answer: "Ruble"
    },
    {
        question: "What is the national currency of Brazil?",
        choices: ["Real", "Peso", "Dollar", "Euro"],
        answer: "Real"
    },
    {
        question: "What is the national currency of Mexico?",
        choices: ["Peso", "Dollar", "Real", "Euro"],
        answer: "Peso"
    },
    {
        question: "What is the national currency of Switzerland?",
        choices: ["Franc", "Euro", "Dollar", "Pound"],
        answer: "Franc"
    },
    {
        question: "What is the national currency of South Korea?",
        choices: ["Won", "Yen", "Yuan", "Dollar"],
        answer: "Won"
    },
    {
        question: "What is the national currency of Turkey?",
        choices: ["Lira", "Dollar", "Euro", "Rupee"],
        answer: "Lira"
    },
    {
        question: "What is the national currency of Argentina?",
        choices: ["Peso", "Real", "Dollar", "Euro"],
        answer: "Peso"
    },
    {
        question: "What is the national currency of Saudi Arabia?",
        choices: ["Riyal", "Dollar", "Dirham", "Dinar"],
        answer: "Riyal"
    },
    {
        question: "What is the national currency of Sweden?",
        choices: ["Krona", "Euro", "Franc", "Dollar"],
        answer: "Krona"
    },
    {
        question: "What is the national currency of Norway?",
        choices: ["Krone", "Euro", "Franc", "Dollar"],
        answer: "Krone"
    },
    {
        question: "What is the national currency of South Africa?",
        choices: ["Rand", "Dollar", "Pound", "Euro"],
        answer: "Rand"
    },
    {
        question: "What is the national currency of New Zealand?",
        choices: ["Dollar", "Euro", "Pound", "Rupee"],
        answer: "Dollar"
    },
    {
        question: "What is the national currency of Singapore?",
        choices: ["Dollar", "Ringgit", "Baht", "Rupee"],
        answer: "Dollar"
    },
    {
        question: "What is the national currency of Malaysia?",
        choices: ["Ringgit", "Dollar", "Baht", "Rupee"],
        answer: "Ringgit"
    },
    {
        question: "What is the national currency of Thailand?",
        choices: ["Baht", "Dollar", "Rupee", "Ringgit"],
        answer: "Baht"
    },
    {
        question: "What is the national currency of Indonesia?",
        choices: ["Rupiah", "Dollar", "Ringgit", "Baht"],
        answer: "Rupiah"
    },
    {
        question: "What is the national currency of Vietnam?",
        choices: ["Dong", "Dollar", "Yuan", "Baht"],
        answer: "Dong"
    },
    {
        question: "What is the national currency of Egypt?",
        choices: ["Pound", "Dollar", "Dirham", "Riyal"],
        answer: "Pound"
    },
    {
        question: "What is the national currency of Nigeria?",
        choices: ["Naira", "Dollar", "Pound", "Euro"],
        answer: "Naira"
    },
    {
        question: "What is the national currency of Kenya?",
        choices: ["Shilling", "Dollar", "Rupee", "Pound"],
        answer: "Shilling"
    },
    {
        question: "What is the national currency of Ghana?",
        choices: ["Cedi", "Dollar", "Pound", "Euro"],
        answer: "Cedi"
    },
    {
        question: "What is the national currency of Israel?",
        choices: ["Shekel", "Dollar", "Pound", "Euro"],
        answer: "Shekel"
    },
    {
        question: "What is the national currency of the United Arab Emirates?",
        choices: ["Dirham", "Riyal", "Dinar", "Dollar"],
        answer: "Dirham"
    },
    {
        question: "What is the national currency of Kuwait?",
        choices: ["Dinar", "Riyal", "Dirham", "Dollar"],
        answer: "Dinar"
    },
    {
        question: "What is the national currency of Iraq?",
        choices: ["Dinar", "Riyal", "Dirham", "Dollar"],
        answer: "Dinar"
    },
    {
        question: "What is the national currency of Iran?",
        choices: ["Rial", "Dinar", "Dirham", "Dollar"],
        answer: "Rial"
    },
    {
        question: "What is the national currency of Pakistan?",
        choices: ["Rupee", "Dollar", "Dinar", "Dirham"],
        answer: "Rupee"
    },
    {
        question: "What is the national currency of Sri Lanka?",
        choices: ["Rupee", "Dollar", "Ringgit", "Baht"],
        answer: "Rupee"
    },
    {
        question: "What is the national currency of Bangladesh?",
        choices: ["Taka", "Rupee", "Dollar", "Yen"],
        answer: "Taka"
    },
    {
        question: "What is the national currency of the Philippines?",
        choices: ["Peso", "Dollar", "Rupee", "Yen"],
        answer: "Peso"
    },
    {
        question: "What is the national currency of Myanmar?",
        choices: ["Kyat", "Dollar", "Rupee", "Yuan"],
        answer: "Kyat"
    },
    {
        question: "What is the national currency of Nepal?",
        choices: ["Rupee", "Dollar", "Yuan", "Taka"],
        answer: "Rupee"
    },
    {
        question: "What is the national currency of Bhutan?",
        choices: ["Ngultrum", "Rupee", "Taka", "Dollar"],
        answer: "Ngultrum"
    },
    {
        question: "What is the national currency of Maldives?",
        choices: ["Rufiyaa", "Rupee", "Dollar", "Yen"],
        answer: "Rufiyaa"
    },
    {
        question: "What is the national currency of Afghanistan?",
        choices: ["Afghani", "Rupee", "Dollar", "Dinar"],
        answer: "Afghani"
    },
    {
        question: "What is the national currency of Uzbekistan?",
        choices: ["Som", "Ruble", "Dollar", "Tenge"],
        answer: "Som"
    },
    {
        question: "What is the national currency of Kazakhstan?",
        choices: ["Tenge", "Ruble", "Dollar", "Som"],
        answer: "Tenge"
    },
    {
        question: "What is the national currency of Turkmenistan?",
        choices: ["Manat", "Ruble", "Dollar", "Tenge"],
        answer: "Manat"
    },
    {
        question: "What is the national currency of Azerbaijan?",
        choices: ["Manat", "Ruble", "Dollar", "Som"],
        answer: "Manat"
    },
    {
        question: "What is the national currency of Georgia?",
        choices: ["Lari", "Ruble", "Dollar", "Manat"],
        answer: "Lari"
    },
    {
        question: "What is the national currency of Armenia?",
        choices: ["Dram", "Ruble", "Dollar", "Manat"],
        answer: "Dram"
    },
    {
        question: "What is the national currency of Belarus?",
        choices: ["Ruble", "Dollar", "Euro", "Yuan"],
        answer: "Ruble"
    },
    {
        question: "What is the national currency of Ukraine?",
        choices: ["Hryvnia", "Ruble", "Dollar", "Euro"],
        answer: "Hryvnia"
    },
    {
        question: "What is the national currency of Poland?",
        choices: ["Zloty", "Euro", "Dollar", "Pound"],
        answer: "Zloty"
    },
    {
        question: "What is the national currency of Hungary?",
        choices: ["Forint", "Euro", "Dollar", "Pound"],
        answer: "Forint"
    },
    {
        question: "What is the national currency of Romania?",
        choices: ["Leu", "Euro", "Dollar", "Pound"],
        answer: "Leu"
    },
    {
        question: "What is the national currency of Bulgaria?",
        choices: ["Lev", "Euro", "Dollar", "Pound"],
        answer: "Lev"
    },
    {
        question: "What is the national currency of Croatia?",
        choices: ["Kuna", "Euro", "Dollar", "Pound"],
        answer: "Kuna"
    },
    {
        question: "What is the national currency of the Czech Republic?",
        choices: ["Koruna", "Euro", "Dollar", "Pound"],
        answer: "Koruna"
    },
    {
        question: "What is the national currency of Slovakia?",
        choices: ["Euro", "Koruna", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Denmark?",
        choices: ["Krone", "Euro", "Dollar", "Pound"],
        answer: "Krone"
    },
    {
        question: "What is the national currency of Iceland?",
        choices: ["Krona", "Euro", "Dollar", "Pound"],
        answer: "Krona"
    },
    {
        question: "What is the national currency of Norway?",
        choices: ["Krone", "Euro", "Dollar", "Pound"],
        answer: "Krone"
    },
    {
        question: "What is the national currency of Sweden?",
        choices: ["Krona", "Euro", "Dollar", "Pound"],
        answer: "Krona"
    },
    {
        question: "What is the national currency of Finland?",
        choices: ["Euro", "Markka", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Greece?",
        choices: ["Euro", "Drachma", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Portugal?",
        choices: ["Euro", "Escudo", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Spain?",
        choices: ["Euro", "Peseta", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Italy?",
        choices: ["Euro", "Lira", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of France?",
        choices: ["Euro", "Franc", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Germany?",
        choices: ["Euro", "Mark", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Belgium?",
        choices: ["Euro", "Franc", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of the Netherlands?",
        choices: ["Euro", "Guilder", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Switzerland?",
        choices: ["Franc", "Euro", "Dollar", "Pound"],
        answer: "Franc"
    },
    {
        question: "What is the national currency of Austria?",
        choices: ["Euro", "Schilling", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Ireland?",
        choices: ["Euro", "Pound", "Dollar", "Punt"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Luxembourg?",
        choices: ["Euro", "Franc", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Malta?",
        choices: ["Euro", "Lira", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Cyprus?",
        choices: ["Euro", "Pound", "Dollar", "Franc"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Estonia?",
        choices: ["Euro", "Kroon", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Latvia?",
        choices: ["Euro", "Lats", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Lithuania?",
        choices: ["Euro", "Litas", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Andorra?",
        choices: ["Euro", "Franc", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Monaco?",
        choices: ["Euro", "Franc", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of San Marino?",
        choices: ["Euro", "Lira", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Vatican City?",
        choices: ["Euro", "Lira", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Liechtenstein?",
        choices: ["Franc", "Euro", "Dollar", "Pound"],
        answer: "Franc"
    },
    {
        question: "What is the national currency of Albania?",
        choices: ["Lek", "Euro", "Dollar", "Pound"],
        answer: "Lek"
    },
    {
        question: "What is the national currency of Serbia?",
        choices: ["Dinar", "Euro", "Dollar", "Pound"],
        answer: "Dinar"
    },
    {
        question: "What is the national currency of Montenegro?",
        choices: ["Euro", "Dinar", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Kosovo?",
        choices: ["Euro", "Dinar", "Dollar", "Pound"],
        answer: "Euro"
    },
    {
        question: "What is the national currency of Bosnia and Herzegovina?",
        choices: ["Mark", "Euro", "Dollar", "Pound"],
        answer: "Mark"
    },
    {
        question: "What is the national currency of North Macedonia?",
        choices: ["Denar", "Euro", "Dollar", "Pound"],
        answer: "Denar"
    },
    {
        question: "What is the national currency of Slovenia?",
        choices: ["Euro", "Tolar", "Dollar", "Pound"],
        answer: "Euro"
    }

]


let currectQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerId = null;



const showQuestions = () => {
    const questionDetails = quiz[currectQuestionIndex]
    // console.log(questionDetails)
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = ''
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i]
        const choiceDiv = document.createElement('div')
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice')
        choicesBox.appendChild(choiceDiv)





        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected')
            }
        })

    }
    if (currectQuestionIndex < quiz.length) {
        startTimer();
    }


}

const showScore = () => {
    questionBox.textContent = '';
    choicesBox.textContent = '';
    scoreCard.textContent = `You scored ${score} out of ${quiz.length}`;
    displayAlert("you have completed quiz")
    nextBtn.textContent = "Encore"
    quizOver = true;
    timer.style.display = 'none'

}

const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currectQuestionIndex].answer) {

        displayAlert("Correct answwer")
        rightSound.play();
        score++;

    }
    else {
        displayAlert(`Wrong answer! ${quiz[currectQuestionIndex].answer} is the correct answer `)
        selectedChoice.style.backgroundColor = 'red';
        wrongSound.play();

    }
    timeLeft = 15;
    currectQuestionIndex++;
    if (currectQuestionIndex < quiz.length) {

        showQuestions();
    }
    else {
        showScore();
        stopTimer();
        // quizOver = true;
        // timer.style.display = 'none'

    }
}


const displayAlert = (msg) => {
    alert.style.display = 'block';
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = 'none'

    }, 2000)

}


const startTimer = () => {
    clearInterval(timerId)
    timer.textContent = timeLeft;
    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            timeEndSound.play();
            const confirmUser = confirm('Time Up!! Do you want to play the quiz again')

            if (confirmUser) {
                timeLeft = 15
                startQuiz()
            }
            else {
                startBtn.style.display = 'block'
                container.style.display = 'none'
                return;
            }

        }
    }
    timerId = setInterval(countDown, 1000)
}

const stopTimer = () => {
    clearInterval(timerId)

}


const shuffleQuestion = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currectQuestionIndex = 0;
    showQuestions();
}


const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = 'flex'
    shuffleQuestion()

}



// Function to handle skip button click
const skipQuestion = () => {
    if (quizOver) {
        // If quiz is over, reset and start quiz again
        nextBtn.textContent = 'Next';
        scoreCard.textContent = '';
        currectQuestionIndex = 0;
        startQuiz();
        quizOver = false;
        score = 0;
    } else {
        // Move to the next question
        currectQuestionIndex++;
        if (currectQuestionIndex < quiz.length) {
            showQuestions();
        } else {
            showScore();
            stopTimer();
        }
    }
};

// Add event listener for skip button click
skipBtn.addEventListener('click', skipQuestion);





startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    container.style.display = 'block'
    startQuiz()


})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {

        displayAlert('select your answer')
        return
    }
    if (quizOver) {
        nextBtn.textContent = 'Next';
        scoreCard.textContent = ''
        currectQuestionIndex = 0
        startQuiz();
        quizOver = false;
        score = 0
    }
    else {
        checkAnswer()
    }







})
