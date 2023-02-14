
const startBtn = document.getElementById('startBtn');

const mainContainer = document.getElementById('mainContainer');
const navbar = document.getElementById('navbarDiv');
const soundBtn = document.getElementById('soundBtn');

const selectorDiv = document.getElementById('selectorDiv');
const questionCategoriesDiv = document.getElementById('questionCategoriesDiv');
const categoryInputs = document.getElementsByName('categoryCheckbox');
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

const questionLevelsDiv = document.getElementById('questionLevelsDiv');
const levelInputs = document.getElementsByName('levelCheckbox');
const veryEasyCheckbox = document.getElementById('veryEasyCheckbox');
const easyCheckbox = document.getElementById('easyCheckbox');
const normalCheckbox = document.getElementById('normalCheckbox');
const hardCheckbox = document.getElementById('hardCheckbox');
const veryHardCheckbox = document.getElementById('veryHardCheckbox');
const selectAllLevelBtn = document.getElementById('selectAllLevelBtn');
const noLevelBtn = document.getElementById('noLevelBtn');

const questionQuantDiv = document.getElementById('questionQuantDiv');
const question10 = document.getElementById('select10');
const question20 = document.getElementById('select20');
const question50 = document.getElementById('select50');
const question100 = document.getElementById('select100');
const questionAll = document.getElementById('selectAll');

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
let veryEasyQuestions = [];
let easyQuestions = [];
let normalQuestions = [];
let hardQuestions = [];
let veryHardQuestions = [];
let categoryValues = [];
let selectedQuestions = [];
let shuffledQuestions = [];
let levelValues = [];
let questionQuant10 = [];
let questionQuant20 = [];
let questionQuant50 = [];
let questionQuant100 = [];

const importQuestions = () => {
    fetch("./questions.json")
    .then((response) => response.json())
    .then((data) => {
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
            veryEasyQuestions = questionsObject.filter((e) => (e.level) == '1');
            easyQuestions = questionsObject.filter((e) => (e.level) == '2');
            normalQuestions = questionsObject.filter((e) => (e.level) == '3');
            hardQuestions = questionsObject.filter((e) => (e.level) == '4');
            veryHardQuestions = questionsObject.filter((e) => (e.level) == '5');
        });
        
        console.log('questionsObject: ', questionsObject);
        console.log('10 questions: ', questionQuant10);
    })
    .catch(error => console.log('error: ', error));
};

importQuestions();

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
    let checkBoxes = document.querySelectorAll('input[name="categoryCheckbox"]:checked');
    
    checkBoxes.forEach((categoryInputs) => {
        categoryValues.push(categoryInputs.value);
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

function selectLevels() {
    let checkBoxes = document.querySelectorAll('input[name="levelCheckbox"]:checked');

    checkBoxes.forEach((levelInputs) => {
        levelValues.push(levelInputs.value);
    });

    if(levelValues.includes('1')) {
        selectedQuestions.push(...veryEasyQuestions);
    }

    if(levelValues.includes('2')) {
        selectedQuestions.push(...easyQuestions);
    }

    if(levelValues.includes('3')) {
        selectedQuestions.push(...normalQuestions);
    }

    if(levelValues.includes('4')) {
        selectedQuestions.push(...hardQuestions);
    }

    if(levelValues.includes('5')) {
        selectedQuestions.push(...veryHardQuestions);
    }
}

function selectQuestQuant() {
    if(question10.checked) {
        questionQuant10 = [...questionsObject].sort(() => 0.5 - Math.random());
    }

    if(question20.checked) {
        questionQuant20 = [...questionsObject].sort(() => 0.5 - Math.random());
    }

    if(question50.checked) {
        questionQuant50 = [...questionsObject].sort(() => 0.5 - Math.random());
    }

    if(question100.checked) {
        questionQuant100 = [...questionsObject].sort(() => 0.5 - Math.random());
    }

}

function startQuiz() {
    let selectedBoxes = [];
    for (let i = 0; i < categoryInputs.length; i++) {
        if (categoryInputs[i].checked) {
            selectedBoxes.push(categoryInputs[i].value);
        }
    }

    for (let i = 0; i < levelInputs.length; i++) {
        if (levelInputs[i].checked) {
            selectedBoxes.push(levelInputs[i].value)
        }
    }
    
    if(selectedBoxes.length > 0) {
        selectCategories();
        selectLevels();
        selectQuestQuant();
        navbar.style.display = 'block';
        selectorDiv.style.display = 'none';
        questionCategoriesDiv.style.display = 'none';
        questionLevelsDiv.style.display = 'none';
        questionQuantDiv.style.display = 'none';
        startQuizBtn.style.display = 'none';
        
        shuffledQuestions = selectedQuestions.sort(() => Math.random() - .5);
        
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
        if(parseInt(points.innerHTML) < shuffledQuestions.length*0.4) {
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
    for (const checkbox of categoryInputs) {
        checkbox.checked = true;
    }
}

noCatBtn.onclick = () => {
    for (const checkbox of categoryInputs) {
        checkbox.checked = false;
    }
}

selectAllLevelBtn.onclick = () => {
    for (const checkbox of levelInputs) {
        checkbox.checked = true;
    }
}

noLevelBtn.onclick = () => {
    for (const checkbox of levelInputs) {
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
    questionCategoriesDiv.style.display = 'inline-flex';
    questionLevelsDiv.style.display = 'inline-flex';
    questionQuantDiv.style.display = 'inline-flex';
    startQuizBtn.style.display = 'inline-flex';
    resetResult();
    resetState();
}