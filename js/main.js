let menubtn = document.getElementsByClassName("menubutton")[0];
menubtn.addEventListener("click", menuButton);


function menuButton(event){
    let dropdown = document.getElementById("dropdownbutton");
    dropdown.classList.toggle("show");

    if (!event.target.matches('.menubutton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let answers = ["A","C","B","A","D"];
let tot = answers.length;

function getCheckedValue(radio){
    let radios = document.getElementsByName(radio);
    for(let i=0; i<radios.length; i++) {
        if (radios[i].checked) return radios[i].value;
    }
}

function getScore(){
    let score = 0;
    for (let i=0; i<answers.length; i++) {
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    }
    return score;
}

function addLiElement(vraag, text){
    let ul = document.getElementsByClassName('quiz');
    let li = document.createElement('li');
    li.classList.add(vraag);
    li.innerHTML = text;
    ul[0].appendChild(li);
}

addLiElement('Vraag1', 'When is this church built?');

function addLiElement2(vraag, text){
    let ul = document.getElementsByClassName('quiz2');
    let li = document.createElement('li');
    li.classList.add(vraag);
    li.innerHTML = text;
    ul[0].appendChild(li);
}
addLiElement2('Vraag2', 'Who was Erasmus?');

function addLiElement3(vraag, text){
    let ul = document.getElementsByClassName('quiz3');
    let li = document.createElement('li');
    li.classList.add(vraag);
    li.innerHTML = text;
    ul[0].appendChild(li);
}
addLiElement3('Vraag3', 'What makes this place so special?');

function addLiElement4(vraag, text){
    let ul = document.getElementsByClassName('quiz4');
    let li = document.createElement('li');
    li.classList.add(vraag);
    li.innerHTML = text;
    ul[0].appendChild(li);
}
addLiElement4('Vraag4', 'What is the name of this church?');

function addLiElement5(vraag, text){
    let ul = document.getElementsByClassName('quiz5');
    let li = document.createElement('li');
    li.classList.add(vraag);
    li.innerHTML = text;
    ul[0].appendChild(li);
}
addLiElement5('Vraag5', 'What religion is being practice here?');





document.getElementById("myBtn").addEventListener("click", returnScore);

function returnScore() {
    document.getElementById("check").innerHTML = "Your score is " + getScore() + "/" + tot;

    let totalScore = getScore();

    if (totalScore < 5){
        document.getElementById("check2").innerHTML = "You can do better!"
    } else {
        document.getElementById("check2").innerHTML = "Congratulations, good job!"
    }
