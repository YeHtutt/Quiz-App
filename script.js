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
        "question" : "Welches der folgenden Länder hat die kleinste Landmasse?",
        "answer_1": "Schweden",
        "answer_2": "Simbabwe",
        "answer_3": "Phillippinen",
        "answer_4": "Irak",
        "right_answer": 3
    },
    {
        "question" : "In welchem dieser Länder gibt es noch eine Sommerzeit?",
        "answer_1": "Spanien",
        "answer_2": "Belarus",
        "answer_3": "Malawi",
        "answer_4": "Anguilla",
        "right_answer": 1
    },
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length; //zeigt unten alle Anzahl der Fragen an

    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion]; //wir gehen in dieses RisenArray rein und holen aktuelles Array raus
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}