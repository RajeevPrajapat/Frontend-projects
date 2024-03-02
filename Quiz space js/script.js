const questions = [
    {
        question: "What is HTML?",
        answers: [
            {text:"Hyper Type Markup Language" ,
        correct:false},
        {text:"Hyper Text Markup Language" ,
        correct:true},
        {text:"Hyper Type Mark Language" ,
        correct:false},
        {text:"High Text Markup Language" ,
        correct:false},
        ]
    },
    {
        question: "What is not use in fronted dev",
        answers: [
            {text:"CSS" , correct:false},
            {text:"HTML" , correct:false},
            {text:"PYTHON" , correct:true},
            {text:"javscript", correct:false},
        ]
    },
    {
        question: "Which language use backhand dev ",
        answers: [
            {text:"CSS" , correct:false},
            {text:"HTML" , correct:false},
            {text:"php" , correct:true},
            {text:"javscript", correct:false},
        ]
    },
    {
        question: "What is ul in html",
        answers: [
            {text:"under list" , correct:false},
            {text:"udy list " , correct:false},
            {text:"uuh list" , correct:false},
            {text:"unorder list", correct:true},
        ]
    },
    {
        question: "What languge decide style ",
        answers: [
            {text:"CSS" , correct:true},
            {text:"HTML" , correct:false},
            {text:"PYTHON" , correct:false},      {text:"javscript", correct:false},
        ]
    },
    {
        question: "Which language use in logical",
        answers: [
            {text:"php" , correct:false},
            {text:"HTML" , correct:false},
            {text:"sql" , correct:false},
            {text:"javscript", correct:true},
        ]
    }
];

const Elementquestion = document.getElementById("Question");
const answerbtn= document.getElementById("answerbtn");
const nextbtn= document.getElementById("nextbtn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currquestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    Elementquestion.innerHTML = questionNo + ". " +currquestion.question;

    currquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ansbtn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", checkAnswer);
    })
}
function resetState(){
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function checkAnswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
    nextbtn.addEventListener("click", movenext)

}

function showScore(){
    resetState()
    Elementquestion.innerHTML = "Your score is " + score + "/" + questions.length;
    nextbtn.style.display = "none";
    nextbtn.innerHTML = "Try agian"
    nextbtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function movenext(){
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}
startQuiz();


































