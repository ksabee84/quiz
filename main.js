
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
        category: "Tudomány és technika",
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
    {
        id: 21,
        category: "Film és TV",
        question: "Hány Oscar-díjat kapott az 1998-as Titanic című film?",
        level: '3',
        answers: [
            { text: "3", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "9", isCorrect: false },
            { text: "11", isCorrect: true },
        ]
    },
    {
        id: 22,
        category: "Film és TV",
        question: "Hány részből áll a Gyűrűk Ura?",
        level: '3',
        answers: [
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: false },
        ]
    },
    {
        id: 23,
        category: "Film és TV",
        question: `Melyik film főcímdala az "Eye of the Tiger"?`,
        level: '3',
        answers: [
            { text: "Star Wars", isCorrect: false },
            { text: "Rocky", isCorrect: true },
            { text: "Ponyvaregény", isCorrect: false },
            { text: "Ál/arc", isCorrect: false },
        ]
    },
    {
        id: 24,
        category: "Film és TV",
        question: "Melyik nem filmtrilógia az alábbiak közül?",
        level: '3',
        answers: [
            { text: "A keresztapa", isCorrect: false },
            { text: "Vissza a jövőbe", isCorrect: false },
            { text: "Batman-filmek", isCorrect: true },
            { text: "A Gyűrűk Ura", isCorrect: false },
        ]
    },
    {
        id: 25,
        category: "Földrajz",
        question: "Melyik városban nem található minaret?",
        level: '3',
        answers: [
            { text: "Debrecen", isCorrect: true },
            { text: "Eger", isCorrect: false },
            { text: "Érd", isCorrect: false },
            { text: "Pécs", isCorrect: false },
        ]
    },
    {
        id: 26,
        category: "Földrajz",
        question: "Hány országgal határos Magyarország?",
        level: '2',
        answers: [
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "7", isCorrect: true },
            { text: "8", isCorrect: false },
        ]
    },
    {
        id: 27,
        category: "Földrajz",
        question: "Melyik város latin neve Arrabona?",
        level: '2',
        answers: [
            { text: "Debrecen", isCorrect: false },
            { text: "Győr", isCorrect: true },
            { text: "Nyíregyháza", isCorrect: false },
            { text: "Pécs", isCorrect: false },
        ]
    },
    {
        id: 28,
        category: "Földrajz",
        question: `Melyik a "leghűségesebb város"?`,
        level: '3',
        answers: [
            { text: "Balassagyarmat", isCorrect: false },
            { text: "Budapest", isCorrect: false },
            { text: "Sopron", isCorrect: true },
            { text: "Szekszárd", isCorrect: false },
        ]
    },
    {
        id: 29,
        category: "Földrajz",
        question: "Melyik folyó folyik át a spanyolországi Córdoba városán?",
        level: '4',
        answers: [
            { text: "Duna", isCorrect: false },
            { text: "Guadalquivir", isCorrect: true },
            { text: "Pó", isCorrect: false },
            { text: "Tejo", isCorrect: false },
        ]
    },
    {
        id: 30,
        category: "Irodalom és kultúra",
        question: "Ki hozta létre Micimackó karakterét?",
        level: '3',
        answers: [
            { text: "A. A. Milne", isCorrect: true },
            { text: "C. S. Lewis", isCorrect: false },
            { text: "J. K. Rowling", isCorrect: false },
            { text: "Lewis Caroll", isCorrect: false },
        ]
    },
    {
        id: 31,
        category: "Irodalom és kultúra",
        question: `Ki írta az "1984" című regényt?`,
        level: '4',
        answers: [
            { text: "Isaac Asimov", isCorrect: false },
            { text: "Aldous Huxley", isCorrect: false },
            { text: "George Orwell", isCorrect: true },
            { text: "Jules Verne", isCorrect: false },
        ]
    },
    {
        id: 32,
        category: "Irodalom és kultúra",
        question: `Ki írta az "Isteni színjáték" című művet?`,
        level: '3',
        answers: [
            { text: "Dante Alighieri", isCorrect: true },
            { text: "Giovanni Boccaccio", isCorrect: false },
            { text: "Johann Wolfgang Goethe", isCorrect: false },
            { text: "William Shakespeare", isCorrect: false },
        ]
    },
    {
        id: 33,
        category: "Sport",
        question: "Melyik válogatott nyerte meg az 1998-as labdarúgó-világbajnokságot?",
        level: '3',
        answers: [
            { text: "Anglia", isCorrect: false },
            { text: "Brazília", isCorrect: false },
            { text: "Franciaország", isCorrect: true },
            { text: "Németország", isCorrect: false },
        ]
    },
    {
        id: 34,
        category: "Sport",
        question: "Melyik évben halt meg Ayrton Senna Formula-1-es versenyző?",
        level: '4',
        answers: [
            { text: "1988", isCorrect: false },
            { text: "1990", isCorrect: false },
            { text: "1992", isCorrect: false },
            { text: "1994", isCorrect: true },
        ]
    },
    {
        id: 35,
        category: "Sport",
        question: "Milyen nemzetiségű volt a Forma-1-es versenyző Niki Lauda?",
        level: '4',
        answers: [
            { text: "brit", isCorrect: false },
            { text: "finn", isCorrect: false },
            { text: "német", isCorrect: false },
            { text: "osztrák", isCorrect: true },
        ]
    },
    {
        id: 36,
        category: "Sport",
        question: "Melyik országban rendezték meg a 2010-es labdarúgó-világbajnokságot?",
        level: '3',
        answers: [
            { text: "Argentína", isCorrect: false },
            { text: "Dél-afrikai Köztársaság", isCorrect: true },
            { text: "Kína", isCorrect: false },
            { text: "Németország", isCorrect: false },
        ]
    },
    {
        id: 37,
        category: "Zene",
        question: "Mi annak a hangszernek a neve, ami a 2010-es labdarúgó-világbajnoksággal vált ismertté?",
        level: '3',
        answers: [
            { text: "balalajka", isCorrect: false },
            { text: "bendzsó", isCorrect: false },
            { text: "ukulele", isCorrect: false },
            { text: "vuvuzela", isCorrect: true },
        ]
    },
    {
        id: 38,
        category: "Tudomány és technika",
        question: "Minek a rövidítése a számítástechnikában a CPU?",
        level: '3',
        answers: [
            { text: "Central Processing Unit", isCorrect: true },
            { text: "Central Programming Unit", isCorrect: false },
            { text: "Core Processing Unit", isCorrect: false },
            { text: "Cost Per Unit", isCorrect: false },
        ]
    },
    {
        id: 39,
        category: "Tudomány és technika",
        question: "Minek a rövidítése a számítástechnikában a CD?",
        level: '3',
        answers: [
            { text: "Cluster Decay", isCorrect: false },
            { text: "Command Denied", isCorrect: false },
            { text: "Compact Disc", isCorrect: true },
            { text: "Core Database", isCorrect: false },
        ]
    },
    {
        id: 40,
        category: "Tudomány és technika",
        question: "Minek a rövidítése az informatikában a HDD?",
        level: '3',
        answers: [
            { text: "Hard Disk Drive", isCorrect: true },
            { text: "High Density Disk", isCorrect: false },
            { text: "High Density Driver", isCorrect: false },
            { text: "Host Device Driver", isCorrect: false },
        ]
    },
    {
        id: 41,
        category: "Történelem",
        question: "Hol található a világ legnagyobb gótikus katedrálisa?",
        level: '5',
        answers: [
            { text: "Kölnben", isCorrect: false },
            { text: "Párizsban", isCorrect: false },
            { text: "Rómában", isCorrect: false },
            { text: "Sevillában", isCorrect: true },
        ]
    },
    {
        id: 42,
        category: "Tudomány és technika",
        question: "Melyik nem egy SEAT-autótípus?",
        level: '3',
        answers: [
            { text: "Astra", isCorrect: true },
            { text: "Cordoba", isCorrect: false },
            { text: "Ibiza", isCorrect: false },
            { text: "Marbella", isCorrect: false },
        ]
    },
    {
        id: 43,
        category: "Tudomány és technika",
        question: "Melyik város a Lamborghini autógyár székhelye?",
        level: '4',
        answers: [
            { text: "Modena", isCorrect: false },
            { text: "Milano", isCorrect: false },
            { text: "Sant'Agata Bolognese", isCorrect: true },
            { text: "Torino", isCorrect: false },
        ]
    },
    {
        id: 44,
        category: "Tudomány és technika",
        question: "Melyik város az Opel autógyár székhelye?",
        level: '4',
        answers: [
            { text: "Köln", isCorrect: false },
            { text: "Rüsselsheim", isCorrect: true },
            { text: "Wolfsburg", isCorrect: false },
            { text: "Zwickau", isCorrect: false },
        ]
    },
    {
        id: 45,
        category: "Történelem",
        question: "Melyik évben jött létre Buda, Óbuda és Pest egyesítésével Budapest?",
        level: '3',
        answers: [
            { text: "1848", isCorrect: false },
            { text: "1867", isCorrect: false },
            { text: "1873", isCorrect: true },
            { text: "1912", isCorrect: false },
        ]
    },
    {
        id: 46,
        category: "Élővilág",
        question: "Hány csontja van egy felnőtt embernek?",
        level: '3',
        answers: [
            { text: "150", isCorrect: false },
            { text: "200", isCorrect: false },
            { text: "206", isCorrect: true },
            { text: "250", isCorrect: false },
        ]
    },
    {
        id: 47,
        category: "Élővilág",
        question: "Melyik nem páros szerv?",
        level: '2',
        answers: [
            { text: "máj", isCorrect: true },
            { text: "szem", isCorrect: false },
            { text: "tüdő", isCorrect: false },
            { text: "vese", isCorrect: false },
        ]
    },
    {
        id: 48,
        category: "Történelem",
        question: "Melyik ország nemzeti hőse Tell Vilmos?",
        level: '3',
        answers: [
            { text: "Anglia", isCorrect: false },
            { text: "Franciaország", isCorrect: false },
            { text: "Németország", isCorrect: false },
            { text: "Svájc", isCorrect: true },
        ]
    },
    {
        id: 49,
        category: "Történelem",
        question: "Mi volt Szent István király eredeti neve?",
        level: '2',
        answers: [
            { text: "Buda", isCorrect: false },
            { text: "Koppány", isCorrect: false },
            { text: "Vajk", isCorrect: true },
            { text: "Vazul", isCorrect: false },
        ]
    },
    {
        id: 50,
        category: "Irodalom és kultúra",
        question: `Ki mondta: "Veni, vidi, vici"?`,
        level: '3',
        answers: [
            { text: "Augustus", isCorrect: false },
            { text: "Calligula", isCorrect: false },
            { text: "Julius Caesar", isCorrect: true },
            { text: "Nero", isCorrect: false },
        ]
    },
    /*
    {
        id: 51,
        category: "",
        question: "",
        level: '',
        answers: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: true },
        ]
    },
    */
];

const startBtn = document.getElementById('startBtn');
const navbar = document.getElementById('navbarDiv');
const soundBtn = document.getElementById('soundBtn');
const inputs = document.querySelectorAll('input');
const selectCategoryBtn = document.getElementById('selectCategoryBtn');
const noCategoryBtn = document.getElementById('noCategoryBtn');
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

let playSounds;
let selectedQuestions = [];
let bulvarQuestions = questions.filter((e) => (e.category) === 'Bulvár');
let elovilagQuestions = questions.filter((e) => (e.category) === 'Élővilág');
let filmQuestions = questions.filter((e) => (e.category) === 'Film és TV');
let foldrajzQuestions = questions.filter((e) => (e.category) === 'Földrajz');
let irodalomQuestions = questions.filter((e) => (e.category) === 'Irodalom és kultúra');
let matekQuestions = questions.filter((e) => (e.category) === 'Matematika');
let sportQuestions = questions.filter((e) => (e.category) === 'Sport');
let toriQuestions = questions.filter((e) => (e.category) === 'Történelem');
let tudomanyQuestions = questions.filter((e) => (e.category) === 'Tudomány és technika');
let zeneQuestions = questions.filter((e) => (e.category) === 'Zene');
let shuffledQuestions = [];
let currentQuestionIndex;
let count = 1;
let pointsValue = 0;

const startQuizSound = new Audio("./sounds/startthequiz.mp3");
const tickingBuzzer = new Audio("./sounds/tickingbuzzer.mp3");
const correctAnswerSound = new Audio("./sounds/correctanswer.mp3");
const wrongAnswerSound = new Audio("./sounds/wronganswer.mp3");

const noOfQuest = shuffledQuestions.length;
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
    let categoryValues = [];
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

    console.log(selectedQuestions);
}

function startQuiz() {
    //importQuestions();
    selectCategories();
    navbar.style.display = 'block';
    startQuizBtn.style.display = 'none';
    shuffledQuestions = selectedQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    categoryDiv.style.display = 'block';
    questionDiv.style.display = 'block';
    answerBtnsContainer.style.display = 'inline-flex';
    resultDiv.style.display = 'block';
    setNextQuestion();
    console.log(shuffledQuestions);
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
        restartButton.onclick = () => {
            resetResult();
            startQuiz();
            restartButton.style.display = 'none';
        }
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

selectCategoryBtn.onclick = () => {
    selectCategories();
}

noCategoryBtn.onclick = () => {
    inputs.checked = false;
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
