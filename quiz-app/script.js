// The JavaScript file!
// Array of key-value pairs
const quizData = [
    {
        //key is question, value is the actual question descript/ans
        //curly brace = object, key: value
        question: 'When was JavaScript Created?',
        a: 'December 4th, 1995',
        b: 'December 4th, 1997',
        c: 'October 12th, 1995',
        d: 'October 12th, 1996',
        correct: 'a'
    }, {
        question: 'When was YouTube founded?',
        a: '2004',
        b: '2005',
        c: '2006',
        correct: 'b'
    }, { 
        question: 'What is Tesla\'s self-driving called?',
        a: 'Super Cruise',
        b: 'Intelligent Drive',
        c: 'Autopilot',
        d: 'Motional',
        e: 'Openpilot',
        correct: 'c'
    } ,{ 
        question: 'What is my ideal car?',
        a: 'Dodge Demon',
        b: 'Corvette',
        c: 'Mercedes-AMG GT R',
        d: 'KIA Stinger',
        correct: 'd'
    } ,{
        question: 'Who is my favourite character?',
        a: 'Ainz Ooal Gown',
        b: 'Batman',
        c: 'The Mandalorian',
        d: 'Andrew Ryan',
        e: 'Doom Slayer',
        correct: 'e'
    }

];

// Keeps track of Quiz Question We are On
let quizQ = 0;
// total length of quiz;
let quizLength = quizData.length;


// Load first question when page is first started
window.onload = updateQuestion();
// Call update question when submit button is clicked.
document.getElementById('submit').onclick = function(){
    updateQuestion();
}


/*
* When Submit button is hit or initial load we want to: Load up a question 
*/
function updateQuestion(){
    let nextQuestion = '';
    let correctAns = '';
    deleteList('radio-box');
    let len = Object.keys(quizData[quizQ]).length;

    for(var key in quizData[quizQ]){
        if(key == 'question'){
            nextQuestion = quizData[quizQ][key];
            var question = document.getElementById('question');
            question.innerHTML = nextQuestion;
        }
        else if(key == 'correct'){
            nextQuestion = quizData[quizQ][key];
        }
        else{
            const id = key;
            const val = quizData[quizQ][key];
            newQuestion(id, val, 'answer');   
        }
    }
    quizQ++;
}

/*
* Loads the new question radio buttons (the answer choices)
* takes in id of radio and value of radio (used for label as well)
*/
function newQuestion(id, val, name){
    var li = document.createElement('li');
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = id;
    radio.value = val;
    radio.name = name;
    radio.classList.add('myradio');

    var label = document.createElement('label');
    label.htmlFor = id;

    var description = document.createTextNode(val);
    label.appendChild(description);

    var newline = document.createElement('br');

    var container = document.getElementById('radio-box');
    container.appendChild(li);
    li.appendChild(radio);
    li.appendChild(label);
}

// Deletes the radio buttons that are no longer needed
function deleteList(pId){
    var list = document.getElementById(pId);
    //While a child element still remains
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}
