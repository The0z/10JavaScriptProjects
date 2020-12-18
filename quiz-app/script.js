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
let quizQCount = 0;
let results = [];
let score = 0;
// total length of quiz;
const quizLength = quizData.length;
const radioContainerName = 'radio-box';
const radioName = 'questionChoices';

// Load first question when page is first started
window.onload = function(){
    updateQuestion(radioName, radioContainerName);
};
const submitBtn = document.getElementById('submitBtn');


// Call update question when submit button is clicked.
// Alternative is onclick.
submitBtn.addEventListener("click", function(){
    
    //Check if user selected an answer first
    const isAnsSel = document.querySelector('input[name="' + radioName + '"]:checked');
    
    if(isAnsSel === undefined || isAnsSel == null || isAnsSel.length == 0){
           snackBar();
    }
    else{
        // if there is more quiz questions, check current Q answer then update question
        // Otherwise if on last answer only check answer and update to score page
        if(quizQCount < quizLength){
            checkAnswer(radioName);
            updateQuestion(radioName, radioContainerName);    
        }
        else if (quizQCount == quizLength){
            checkAnswer(radioName);
            quizQCount++;
            deleteList(radioContainerName);
            printScore();
        }
    }
});

/*
* Shows snack bar for 3 seconds then fades out
*/
function snackBar(){
    var snackBarEl = document.getElementById("snackbar");
    
    // add show class to div element to make it appear
    snackBarEl.className = "show";
    //After 3.5 seconds make it disappear
    setTimeout(function(){snackBarEl.className = snackBarEl.className.replace("show", "")}, 3000);

}


/* 
* Checks whether the user entered the correct answer 
*/
function checkAnswer(radioName){
   let correctAns = quizData[quizQCount-1]['correct'];
   // Returns an array of all the choses
   let selectedAns = document.querySelector('input[name="' + radioName + '"]:checked').id;

    if(correctAns === selectedAns){
        resultsCounter('Correct');
        score++;
    }
    else{
        resultsCounter('Incorrect');
    } 
}


// Simple function used to populate a results array.
function resultsCounter(msgStr){
    results.push(msgStr);
}

/*
* Prints out your results to the HTML page
*/
function printScore(){
    document.getElementById('submitBtn').remove();
    let question = document.getElementById('question');
    question.style.textAlign = 'center';
    resultParagraph = 'Results: <br />'

    let p = document.createElement('p');


    for(let i = 0; i < results.length; i++){
        resultParagraph += 'Question ' + String(i+1) + ': ' + results[i] + ' <br />';
    }

    resultParagraph += 'Score is: ' + String((score/quizLength)*100) + "%";

    question.innerHTML = resultParagraph;
    
}


/*
* When Submit button is hit or initial load we want to: Load up a question 
* Takes in the name that you want to name the radio buttons.
*/
function updateQuestion(radioName, radioContainerName){
    let nextQuestion = '';
    deleteList('radio-box');
    let len = Object.keys(quizData[quizQCount]).length;

    for(var key in quizData[quizQCount]){
        // check if it is the question header first else, if not correct answer create radio buttin.
        if(key == 'question'){
            nextQuestion = quizData[quizQCount][key];
            let question = document.getElementById('question');
            question.innerHTML = nextQuestion;
        }
        else if(key != 'correct'){
            const id = key;
            const val = quizData[quizQCount][key];
            newRadioChoice(id, val, radioName, radioContainerName);   
        }
    }
    quizQCount++;
}

/*
* Loads the new question radio buttons (the answer choices)
* takes in id of radio and value of radio (used for label as well)
* Takes in container_name that you want the radio container to be named
*/
function newRadioChoice(id, val, name, container_name){
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

    var container = document.getElementById(container_name);
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
