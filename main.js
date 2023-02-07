
const startBtn = document.getElementById('startBtn');

const navbar = document.getElementById('navbarDiv');
const soundBtn = document.getElementById('soundBtn');

const questionCategoriesDiv = document.getElementById('questionCategoriesDiv');
const inputs = document.getElementsByTagName('input');
const bulvarCheckbox = document.getElementById('bulvarCheckbox');
const elovilagCheckbox = document.getElementById('elovilagCheckbox');
const filmCheckbox = document.getElementById('filmCheckbox');
const foldrajzCheckbox = document.getElementById('foldrajzCheckbox');
const irodalomCheckbox = document.getElementById('irodalomCheckbox');
const matekCheckbox = document.getElementById('matekCheckbox');
const sportCheckbox = document.getElementById('sportCheckbox');
const toriCheckbox = document.getElementById('toriCheckbox');
const tudomanyCheckbox = document.getElementById('tudomanyCheckbox');
const zeneCheckbox = document.getElementById('zeneCheckbox');
const selectAllCatBtn = document.getElementById('selectAllCatBtn');
const noCatBtn = document.getElementById('noCatBtn');

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

let questionsObject = [];
let bulvarQuestions = [];
let elovilagQuestions = [];
let filmQuestions = [];
let foldrajzQuestions = [];
let irodalomQuestions = [];
let matekQuestions = [];
let sportQuestions = [];
let toriQuestions = [];
let tudomanyQuestions = [];
let zeneQuestions = [];
let categoryValues = [];
let selectedQuestions = [];
let shuffledQuestions = [];

const importQuestions = () => {
    fetch("./questions.json")
    .then((response) => response.json())
    .then((data) => {
        console.log('data is: ', data);
        data.map(item => {
            questionsObject.push(item);
            bulvarQuestions = questionsObject.filter((e) => (e.category) == 'Bulvár');
            elovilagQuestions = questionsObject.filter((e) => (e.category) == 'Élővilág');
            filmQuestions = questionsObject.filter((e) => (e.category) == 'Film és TV');
            foldrajzQuestions = questionsObject.filter((e) => (e.category) == 'Földrajz');
            irodalomQuestions = questionsObject.filter((e) => (e.category) == 'Irodalom és kultúra');
            matekQuestions = questionsObject.filter((e) => (e.category) == 'Matematika');
            sportQuestions = questionsObject.filter((e) => (e.category) == 'Sport');
            toriQuestions = questionsObject.filter((e) => (e.category) == 'Történelem');
            tudomanyQuestions = questionsObject.filter((e) => (e.category) == 'Tudomány és technika');
            zeneQuestions = questionsObject.filter((e) => (e.category) == 'Zene');
            shuffledQuestions = selectedQuestions.sort(() => Math.random() - .5);
        });
        
        console.log('questionsObject: ', questionsObject);
    })
    .catch(error => console.log('error: ', error));
};

const startQuizSound = new Audio("./sounds/startthequiz.mp3");
const tickingBuzzer = new Audio("./sounds/tickingbuzzer.mp3");
const correctAnswerSound = new Audio("./sounds/correctanswer.mp3");
const wrongAnswerSound = new Audio("./sounds/wronganswer.mp3");

let playSounds;
let currentQuestionIndex;
let count = 1;
let pointsValue = 0;

function toggleSounds() {
    playSounds = !playSounds;
    if(playSounds) {
        soundBtn.style.backgroundImage = "url('./imgs/sound-on.png')";
    } else {
        tickingBuzzer.muted = !tickingBuzzer.muted;
        correctAnswerSound.muted = !correctAnswerSound.muted;
        wrongAnswerSound.muted = !wrongAnswerSound.muted;
        soundBtn.style.backgroundImage = "url('./imgs/sound-off.png')";
    }
}

function selectCategories() {
    let checkBoxes = document.querySelectorAll('input:checked');
    
    checkBoxes.forEach((inputs) => {
        categoryValues.push(inputs.value);
    });

    if(categoryValues.includes('Bulvár')) {
        selectedQuestions.push(...bulvarQuestions);
    }

    if(categoryValues.includes('Élővilág')) {
        selectedQuestions.push(...elovilagQuestions);
    }

    if(categoryValues.includes('Film és TV')) {
        selectedQuestions.push(...filmQuestions);
    }

    if(categoryValues.includes('Földrajz')) {
        selectedQuestions.push(...foldrajzQuestions);
    }

    if(categoryValues.includes('Irodalom és kultúra')) {
        selectedQuestions.push(...irodalomQuestions);
    }

    if(categoryValues.includes('Matematika')) {
        selectedQuestions.push(...matekQuestions);
    }

    if(categoryValues.includes('Sport')) {
        selectedQuestions.push(...sportQuestions);
    }

    if(categoryValues.includes('Történelem')) {
        selectedQuestions.push(...toriQuestions);
    }

    if(categoryValues.includes('Tudomány és technika')) {
        selectedQuestions.push(...tudomanyQuestions);
    }

    if(categoryValues.includes('Zene')) {
        selectedQuestions.push(...zeneQuestions);
    }
}

function startQuiz() {
    importQuestions();
    let selectedBoxes = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            selectedBoxes.push(inputs[i].value);
        }
    }
    
    if(selectedBoxes.length > 0) {
        selectCategories();
        navbar.style.display = 'block';
        questionCategoriesDiv.style.display = 'none';
        startQuizBtn.style.display = 'none';
        
        //shuffledQuestions = selectedQuestions.sort(() => Math.random() - .5);
        
        const noOfQuest = shuffledQuestions.length;
        
        noOfQuestUpper.innerHTML = noOfQuest;
        noOfQuestFooter.innerHTML = noOfQuest;
        currentQuestionIndex = 0;
        
        categoryDiv.style.display = 'block';
        questionDiv.style.display = 'block';
        answerBtnsContainer.style.display = 'inline-flex';
        resultDiv.style.display = 'block';

        setNextQuestion();
    }    
}

function increaseQuestionNumbers() {
    count +=1;
    questionNumber.innerHTML = count;
}

function resetState() {
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
    tickingBuzzer.play();
    tickingBuzzer.loop = true;
}

function showQuestion(shuffledQuestions) {
    categoryText.innerText = shuffledQuestions.category;
    questionText.innerText = shuffledQuestions.question;
    shuffledQuestions.answers.forEach(answer => {
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
    }

    selectedButton.classList.add('correct');

    tickingBuzzer.pause();
        
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
        wrongAnswerSound.play();
        selectedButton.classList.add('wrong');
        resultDiv.innerHTML = 'Helytelen válasz!';
        resultDiv.classList.add('border', 'border-danger', 'bg-danger'),
        pointsDiv.style.display = 'block';
        pointsDiv.classList.add('border', 'border-danger');
        mainContainer.classList.add('border-danger', 'border-3');
        answerBtnsContainer.classList.add('border', 'border-danger', 'border-3');
    }

    if(parseInt(points.innerHTML) == shuffledQuestions.length) {
        resultDiv.innerHTML = 'Minden válasz helyes!<br>Te egy zseni vagy!';
    }

    if(parseInt(points.innerHTML) >= shuffledQuestions.length*0.75 && parseInt(points.innerHTML) <= shuffledQuestions.length*0.8) {
        resultDiv.innerHTML += '<br>Ne add fel, megy ez neked!';
    }

    if(parseInt(points.innerHTML) >= shuffledQuestions.length*0.5 && parseInt(points.innerHTML) <= shuffledQuestions.length*0.55) {
        resultDiv.innerHTML += '<br>Gyerünk, van remény!';
    }

    setStatusClass();
}

function increasePoints() {
    ++pointsValue;
    points.innerHTML = pointsValue;
}

function setStatusClass(answerBtn, isCorrect) {
    clearStatusClass(answerBtn);
    if(isCorrect) {
        answerBtn.classList.remove('btn-primary');
        answerBtn.classList.add('btn-success');
    } else {
        answerBtn.classList.remove('btn-primary');
        answerBtn.classList.add('btn-danger');
    }
}

function clearStatusClass(answerBtn) {
    answerBtn.classList.remove('correct');
    answerBtn.classList.remove('wrong');
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

selectAllCatBtn.onclick = () => {
    for (const checkbox of inputs) {
        checkbox.checked = true;
    }
}

noCatBtn.onclick = () => {
    for (const checkbox of inputs) {
        checkbox.checked = false;
    }
}

soundBtn.onclick = () => {
    toggleSounds();
}

startQuizBtn.onclick = () => {
    soundBtn.style.display = 'block';
    startQuiz();
}

nextQuestionBtn.onclick = () => {
    currentQuestionIndex++;
    increaseQuestionNumbers();
    setNextQuestion();
    resultDiv.style.display = 'none';
}

restartButton.onclick = () => {
    questionDiv.style.display = 'none';
    restartButton.style.display = 'none';
    startQuizBtn.style.display = 'inline-block';
    resetResult();
    resetState();
}