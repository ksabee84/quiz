
const questions = [
    {
        id: 1,
        category: "Földrajz",
        question: "Mi Svájc fővárosa?",
        level: '2',
        answers: [
            { text: "Bern", isCorrect: true },
            { text: "New York", isCorrect: false },
            { text: "Párizs", isCorrect: false },
            { text: "Tirana", isCorrect: false },
        ]
    },
    {
        id: 2,
        category: "Földrajz",
        question: "Melyik a legnépesebb város az alábbiak közül?",
        level: '2',
        answers: [
            { text: "Debrecen", isCorrect: true },
            { text: "Győr", isCorrect: false },
            { text: "Miskolc", isCorrect: false },
            { text: "Szeged", isCorrect: false },
        ]
    },
    {
        id: 3,
        category: "Földrajz",
        question: "Hány lakosa van Budapestnek?",
        level: '2',
        answers: [
            { text: "1 millió", isCorrect: false },
            { text: "1,5 millió", isCorrect: false },
            { text: "1,7 millió", isCorrect: true },
            { text: "2 millió", isCorrect: false },
        ]
    },
    {
        id: 4,
        category: "Sport",
        question: "Ki nyerte meg a 2021-es Forma-1-es világbajnokságot?",
        level: '3',
        answers: [
            { text: "Fernando Alonso", isCorrect: false },
            { text: "Lewis Hamilton", isCorrect: false },
            { text: "Max Verstappen", isCorrect: true },
            { text: "Mick Schumacher", isCorrect: false }, 
        ]
    },
    {
        id: 5,
        category: "Tudomány és technika",
        question: "Melyik országhoz tartozik a Hyundai autómárka?",
        level: '3',
        answers: [
            { text: "Dél-Korea", isCorrect: true },
            { text: "Japán", isCorrect: false },
            { text: "Németország", isCorrect: false },
            { text: "USA", isCorrect: false },
        ]
    },
    {
        id: 6,
        category: "Irodalom és kultúra",
        question: "Hogy hívják A vágy villamosa című könyv/film főhősét?",
        level: '4',
        answers: [
            { text: "Blanche DuBois", isCorrect: true },
            { text: "Jack Dawson", isCorrect: false },
            { text: "Miranda Hobbes", isCorrect: false },
            { text: "Phoebe Buffay", isCorrect: false },
        ]
    },
    {
        id: 7,
        category: "Matematika",
        question: "Mennyi 12 négyzete?",
        level: '2',
        answers: [
            { text: "122", isCorrect: false },
            { text: "140", isCorrect: false },
            { text: "144", isCorrect: true },
            { text: "146", isCorrect: false },
        ]
    },
    {
        id: 8,
        category: "Történelem",
        question: "Mikor zajlott a Habsburgok elleni forradalom és szabadságharc?",
        level: '2',
        answers: [
            { text: "1703-1711", isCorrect: false },
            { text: "1848-1849", isCorrect: true },
            { text: "1867", isCorrect: false },
            { text: "1914-1918", isCorrect: false },
        ]
    },
    {
        id: 9,
        category: "Film és TV",
        question: "Hány epizódja volt a Dallas című filmsorozatnak?",
        level: '4',
        answers: [
            { text: "220", isCorrect: false },
            { text: "270", isCorrect: false },
            { text: "357", isCorrect: true },
            { text: "400", isCorrect: false },
        ]
    },
    {
        id: 10,
        category: "Történelem",
        question: "Ki volt az Amerikai Egyesült Államok 40. elnöke?",
        level: '4',
        answers: [
            { text: "Barack Obama", isCorrect: false },
            { text: "George W. Bush", isCorrect: false },
            { text: "Jimmy Carter", isCorrect: false },
            { text: "Ronald Reagan", isCorrect: true },
        ]
    },
    {
        id: 11,
        category: "Irodalom és kultúra",
        question: "A monda szerint hol lakik az igazi Télapó?",
        level: '3',
        answers: [
            { text: "Amerikában", isCorrect: false },
            { text: "Finnországban", isCorrect: true },
            { text: "Kínában", isCorrect: false },
            { text: "Oroszországban", isCorrect: false },
        ]
    },
    {
        id: 12,
        category: "Földrajz",
        question: "Hány kerülete van Budapestnek?",
        level: '3',
        answers: [
            { text: "16", isCorrect: false },
            { text: "18", isCorrect: false },
            { text: "20", isCorrect: false },
            { text: "23", isCorrect: true },
        ]
    },
    {
        id: 13,
        category: "Tudomány és technológia",
        question: "Mi volt a híres magyar gőzmozdony, a Bivaly sorozatszáma?",
        level: '3',
        answers: [
            { text: "242", isCorrect: false },
            { text: "323", isCorrect: false },
            { text: "424", isCorrect: true },
            { text: "626", isCorrect: false },
        ]
    },
    {
        id: 14,
        category: "Film és TV",
        question: "Melyik színész formálta meg először filmen James Bondot?",
        level: '3',
        answers: [
            { text: "Daniel Craig", isCorrect: false },
            { text: "George Lazenby", isCorrect: false },
            { text: "Pierce Brosnan", isCorrect: false },
            { text: "Sean Connery", isCorrect: true },
        ]
    },
    {
        id: 15,
        category: "Sport",
        question: "Mikor rendezték az első Forma-1-es Magyar Nagydíjat?",
        level: '3',
        answers: [
            { text: "1983", isCorrect: false },
            { text: "1984", isCorrect: false },
            { text: "1986", isCorrect: true },
            { text: "1990", isCorrect: false },
        ]
    },
    {
        id: 16,
        category: "Történelem",
        question: "Melyik év április 15-én süllyedt el a Titanic?",
        level: '3',
        answers: [
            { text: "1890", isCorrect: false },
            { text: "1910", isCorrect: false },
            { text: "1912", isCorrect: true },
            { text: "1930", isCorrect: false },
        ]
    },
    {
        id: 17,
        category: "Földrajz",
        question: "Mi Portugália fővárosa?",
        level: '2',
        answers: [
            { text: "Lisszabon", isCorrect: true },
            { text: "Párizs", isCorrect: false },
            { text: "Porto", isCorrect: false },
            { text: "Sevilla", isCorrect: false },
        ]
    },
    {
        id: 18,
        category: "Földrajz",
        question: "Melyik folyó magyarországi szakasza a leghosszabb?",
        level: '2',
        answers: [
            { text: "Dráva", isCorrect: false },
            { text: "Duna", isCorrect: false },
            { text: "Maros", isCorrect: false },
            { text: "Tisza", isCorrect: true },
        ]
    },
    {
        id: 19,
        category: "Élővilág",
        question: "A következők közül melyik a legkisebb madár?",
        level: '3',
        answers: [
            { text: "méhkolibri", isCorrect: true },
            { text: "sárgafejű királyka", isCorrect: false },
            { text: "sárszalonka", isCorrect: false },
            { text: "vörösbegy", isCorrect: false },
        ]
    },
    {
        id: 20,
        category: "Tudomány és technika",
        question: "Hivatalosan ki találta fel a telefont?",
        level: '2',
        answers: [
            { text: "Alexander Graham Bell", isCorrect: true },
            { text: "Hans Geiger", isCorrect: false },
            { text: "Isaac Newton", isCorrect: false },
            { text: "James Watt", isCorrect: false },
        ]
    },

];

const startBtn = document.getElementById('startBtn');
const mainContainer = document.getElementById('mainContainer');
const startQuizBtn = document.getElementById('startQuizBtn');
const questionDiv = document.getElementById('questionDiv');
const noOfQuestUpper = document.getElementById('noOfQuestUpper');
const questionNumber = document.getElementById('questionNo');
const categoryDiv = document.getElementById('categoryDiv');
const categoryText = document.getElementById('categoryText');
const questionText = document.getElementById('questionText');
const answerBtnsContainer = document.getElementById('answerBtns');
const answerBtn = document.getElementsByClassName('answBtn');
const resultDiv = document.getElementById('resultDiv');
const pointsDiv = document.getElementById('pointsDiv');
const noOfQuestFooter = document.getElementById('noOfQuestFooter');
const points = document.getElementById('points');
const nextQuestionBtn = document.getElementById('nextBtn');
const restartButton = document.getElementById('restartBtn');

categoryDiv.style.display = 'none';
questionDiv.style.display = 'none';
resultDiv.style.display = 'none';
pointsDiv.style.display = 'none';
nextQuestionBtn.style.display = 'none';

let shuffledQuestions, currentQuestionIndex;
let count = 1;
let pointsValue = 0;

const correctAnswerSound = new Audio("./sounds/correctanswer.mp3");
const startQuizSound = new Audio("./sounds/startthequiz.mp3");

const noOfQuest = questions.length;
noOfQuestUpper.innerHTML = noOfQuest;
noOfQuestFooter.innerHTML = noOfQuest;

/*
function importQuestions() {
    fetch("./questions.json")
    .then((res) => {
    return res.json();
    })
    .then((data) => console.log(data));
}
*/

function startQuiz() {
    //importQuestions();
    startQuizBtn.style.display = 'none';
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    categoryDiv.style.display = 'block';
    questionDiv.style.display = 'block';
    answerBtnsContainer.style.display = 'inline-flex';
    resultDiv.style.display = 'block';
    setNextQuestion();
}

function increaseQuestionNumbers() {
    count +=1;
    questionNumber.innerHTML = count;
}

function resetState() {
    //clearStatusClass(resultDiv, pointsDiv);
    resultDiv.style.display = 'none';
    pointsDiv.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    mainContainer.classList.remove('border-success', 'border-danger', 'border-3');
    answerBtnsContainer.classList.remove('border-success', 'border-danger', 'border-3');
    resultDiv.classList.remove('border', 'border-success', 'border-danger', 'bg-success', 'bg-danger');
    pointsDiv.classList.remove('border', 'border-success', 'border-danger');
    while(answerBtnsContainer.firstChild) {
        answerBtnsContainer.removeChild(answerBtnsContainer.firstChild)
    }
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
    categoryText.innerText = questions.category;
    questionText.innerText = questions.question;
    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-primary', 'col-3', 'col-sm-5', 'mx-auto', 'py-3', 'my-3', 'text-center', 'text-wrap', 'border', 'border-black', 'rounded', 'fs-5', 'hover-overlay', 'ripple', 'shadow-1-strong', 'answBtn');
        if(answer.isCorrect) {
            button.dataset.isCorrect = answer.isCorrect;
        }
        answerBtnsContainer.appendChild(button);
        answerBtnsContainer.addEventListener('click', selectAnswer, {once:true});
    })
}

function selectAnswer(e) {
    const selectedButton = e.target;
    //const correct = selectedButton.dataset.isCorrect;
    Array.from(answerBtnsContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.isCorrect);
        
    })
    resultDiv.style.display = 'block';

    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextQuestionBtn.style.display = 'inline';
    } else {
        if(parseInt(points.innerHTML) < questions.length*0.4) {
            resultDiv.innerHTML += '<br>Hát van még mit gyakorolnod...';
        }
        nextQuestionBtn.style.display = 'none';
        restartButton.innerText = 'Újrakezdés!';
        restartButton.classList.add('btn', 'btn-primary', 'col-3', 'col-sm-3', 'mx-auto', 'text-center', 'border', 'border-black', 'rounded', 'shadow');
        restartButton.style.display = 'block';
        restartButton.onclick = () => {
            resetResult();
            startQuiz();
            restartButton.style.display = 'none';
        }
    }

    selectedButton.classList.add('correct');
        
    if(selectedButton.dataset.isCorrect) {
        correctAnswerSound.play();
        resultDiv.innerHTML = 'Helyes válasz!';
        resultDiv.classList.add('border', 'border-success', 'bg-success'),
        pointsDiv.style.display = 'block';
        pointsDiv.classList.add('border', 'border-success'),
        mainContainer.classList.add('border-success', 'border-3');
        answerBtnsContainer.classList.add('border', 'border-success', 'border-3');
        increasePoints();
    }
    else {
        selectedButton.classList.add('wrong');
        resultDiv.innerHTML = 'Helytelen válasz!';
        resultDiv.classList.add('border', 'border-danger', 'bg-danger'),
        pointsDiv.style.display = 'block';
        pointsDiv.classList.add('border', 'border-danger');
        mainContainer.classList.add('border-danger', 'border-3');
        answerBtnsContainer.classList.add('border', 'border-danger', 'border-3');
    }

    if(parseInt(points.innerHTML) == questions.length) {
        resultDiv.innerHTML = 'Minden válasz helyes!<br>Te egy zseni vagy!';
    }

    if(parseInt(points.innerHTML) >= questions.length*0.75 && parseInt(points.innerHTML) <= questions.length*0.8) {
        resultDiv.innerHTML += '<br>Ne add fel, megy ez neked!';
    }

    if(parseInt(points.innerHTML) >= questions.length*0.5 && parseInt(points.innerHTML) <= questions.length*0.55) {
        resultDiv.innerHTML += '<br>Gyerünk, van remény!';
    }

    setStatusClass();
}

function increasePoints() {
    ++pointsValue;
    points.innerHTML = pointsValue;
}

function setStatusClass(element, isCorrect) {
    clearStatusClass(element);
    if(isCorrect) {
        element.classList.remove('btn-primary');
        element.classList.add('btn-success');
    } else {
        element.classList.remove('btn-primary');
        element.classList.add('btn-danger');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetResult() {
    points.innerHTML = 0;
    questionNumber.innerHTML = '1';
}

/*
startBtn.onclick = () => {
    startQuizSound.play();
}
*/

startQuizBtn.onclick = () => {
    startQuiz();
}

nextQuestionBtn.onclick = () => {
    currentQuestionIndex++;
    increaseQuestionNumbers();
    setNextQuestion();
    resultDiv.style.display = 'none';
}
