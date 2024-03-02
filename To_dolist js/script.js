const inputbox = document.getElementById("inputBox");
const listElement = document.getElementsByClassName("listcontain")[0];

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listElement.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        }
    inputbox.value = '';
    saveData();
}

listElement.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    };
},false);


function saveData(){
    localStorage.setItem("data",listElement.innerHTML);
}

function showtask(){
    localStorage.innerHTML = localStorage.getItem("data");
}
showtask();



























