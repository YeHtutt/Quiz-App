let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Bernes-Lee",
        "answer_4": "Justin Biber",
        "right_answer": 3
    },
    {
        "question": "Welches der folgenden Länder hat die kleinste Landmasse?",
        "answer_1": "Schweden",
        "answer_2": "Simbabwe",
        "answer_3": "Phillippinen",
        "answer_4": "Irak",
        "right_answer": 3
    },
    {
        "question": "In welchem dieser Länder gibt es noch eine Sommerzeit?",
        "answer_1": "Spanien",
        "answer_2": "Belarus",
        "answer_3": "Malawi",
        "answer_4": "Anguilla",
        "right_answer": 1
    },
    {
        "question": "Was ist das größte Tier der Welt?",
        "answer_1": "Elefant",
        "answer_2": "Blauwal",
        "answer_3": "Braunbär",
        "answer_4": "Giraffe",
        "right_answer": 2
    },
    {
        "question": "Wie viele Stacheln hat ein Igel ungefähr?",
        "answer_1": "50",
        "answer_2": "500",
        "answer_3": "1000",
        "answer_4": "5000",
        "right_answer": 4
    },
    {
        "question": "Welches Land hat die höchste Migrationsrate?",
        "answer_1": "Spanien",
        "answer_2": "Italien",
        "answer_3": "Niederlande",
        "answer_4": "Japan",
        "right_answer": 1
    },
    {
        "question": "Welche Stadt is die Hauptstadt Spaniens?",
        "answer_1": "Barcelona",
        "answer_2": "Valencia",
        "answer_3": "Andorra la Vella",
        "answer_4": "Madrid",
        "right_answer": 4
    },
    {
        "question": "Wie heißt der höchste Berg der Welt?",
        "answer_1": "Alpen",
        "answer_2": "Zugspitze",
        "answer_3": "Mount Everest",
        "answer_4": "Kilimandscharo",
        "right_answer": 3
    },
    {
        "question": "Was Essen Bären sehr gerne?",
        "answer_1": "Honig",
        "answer_2": "Marmelade",
        "answer_3": "Nussnougatcreme",
        "answer_4": "Frischkäse",
        "right_answer": 1
    },
    {
        "question": "Wie viele Inseln hat Indonesien insgesamt?",
        "answer_1": "etwa 150",
        "answer_2": "etwa 300",
        "answer_3": "etwa 4000",
        "answer_4": "über 17000",
        "right_answer": 4
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length; //zeigt unten alle Anzahl der Fragen an

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion]; //wir gehen in dieses RisenArray rein und holen aktuelles Array raus
    document.getElementById('questiontext').innerHTML = question['question']; //HTML innen von QuizFrage wird mit JSON Array Frage-String geladen
    document.getElementById('answer_1').innerHTML = question['answer_1']; //HTML innen von QuizFrage wird mit JSON Array Antwort-String geladen
    document.getElementById('answer_2').innerHTML = question['answer_2']; //HTML innen von QuizFrage wird mit JSON Array Antowrt-String geladen
    document.getElementById('answer_3').innerHTML = question['answer_3']; //HTML innen von QuizFrage wird mit JSON Array Antowrt-String geladen
    document.getElementById('answer_4').innerHTML = question['answer_4']; //HTML innen von QuizFrage wird mit JSON Array Antowrt-String geladen
}

function answer(selection) {
    let question = questions[currentQuestion];
    //console.log('Question is ', question['question'])
    console.log('Selected answer is: ', selection)
    let selectedQuestionNumber = selection.slice(-1); //get last character of string (answer_3 -->'3')
    console.log('selectedQuestion in Char is: ', selectedQuestionNumber)
    console.log('Right answer is: ', question['right_answer'])


    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort Wow!!')
        document.getElementById(selection).parentNode.classList.add('bg-success'); //bei richtiger Antwort mit der ID-seine Eltern Container wird background zur grünen Farbe geändert
    } else {
        console.log('Leider falsche Antwort!!')
        document.getElementById(selection).parentNode.classList.add('bg-danger'); //bei falscher Antwort mit der ID-seine Eltern Container wird background zur rote Farbe geändert
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled =false;
}


function nextQuestion(){
    currentQuestion++; // z.B. Variable von 0 auf 1 erhöhen
    resetAnswerButtons();
    showQuestion();
    document.getElementById('next-button').disabled =ture;
}

//alle Antworten von Backgroud-Color entfernen
function resetAnswerButtons(){  
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
