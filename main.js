const pi = document.querySelector("#pi");
const hi = document.querySelector("#hi");
const ppi = document.querySelector("#ppi");//beginning page, not hidden

const h1 = document.querySelector("#h1");//stuff to be hidden, gets id to be used
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
const h5 = document.querySelector("#h5");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

const pp1 = document.querySelector("#pp1");
const pp2 = document.querySelector("#pp2");
const pp3 = document.querySelector("#pp3");
const pp4 = document.querySelector("#pp4");
const pp5 = document.querySelector("#pp5");//the ids and stuff

function hideall()//hide the content
{
    hi.style.display = "none";
    ppi.style.display = "none";

    h1.style.display = "none";
    h2.style.display = "none";
    h3.style.display = "none";
    h4.style.display = "none";
    h5.style.display = "none";

    pp1.style.display = "none";
    pp2.style.display = "none";
    pp3.style.display = "none";
    pp4.style.display = "none";
    pp5.style.display = "none";
}

function showall() //... except Index
{
    hi.style.display = "block";
    ppi.style.display = "block";
}



pi.addEventListener("click", function () {
    showall();
    hi.style.display = "none";
    ppi.style.display = "none";
    hideall();
    showall();
});



p1.addEventListener("click", function () {
    hideall();
    h1.style.display = "block";
    pp1.style.display = "block";
});

p2.addEventListener("click", function () {
    hideall();
    h2.style.display = "block";
    pp2.style.display = "block";
});

p3.addEventListener("click", function () {
    hideall();
    h3.style.display = "block";
    pp3.style.display = "block";
});

p4.addEventListener("click", function () {
    hideall();
    h4.style.display = "block";
    pp4.style.display = "block";
});

p5.addEventListener("click", function () {
    hideall();
    h5.style.display = "block";
    pp5.style.display = "block";
});
hideall();
showall();


const hamBtn = document.querySelector("#ham");

hamBtn.addEventListener("click", toggleMenus);

const menuItemsList = document.querySelector("nav ul");

function toggleMenus() {

    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu";
        menuItemsList.classList.remove("menuShow");
    }
    else {
        hamBtn.innerHTML = "Open Menu";
        menuItemsList.classList.add("menuShow");
    }
}


const Submit = document.querySelector("#Submit");
Submit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function CheckAns() {
    score = 0;
    q1 = document.querySelector("input[name='q1']:checked").value;
    console.log(q1);
    if (q1 == "RE") score++;

    q2 = document.querySelector("input[name='q2']:checked").value;
    console.log(q2);
    if (q2 == "S") score++;

    q3 = document.querySelector("input[name='q3']:checked").value;
    console.log(q3);
    if (q3 == "BM") score++;

    q4 = document.querySelector("input[name='q4']:checked").value;
    console.log(q4);
    if (q4 == "WM") score++;

    q5 = document.querySelector("input[name='q5']:checked").value;
    console.log(q5);
    if (q5 == "DE") score++;
    scorebox.innerHTML = "Score:" + score;
}

const cg = document.getElementsByClassName("cg");
function GetRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function Movecg() {
    cg[0].style.left = GetRandom(0, 300) + "px";
    cg[0].style.top = GetRandom(0, 300) + "px";
}

function Movecgg() {
    cg[1].style.left = GetRandom(0, 300) + "px";
    cg[1].style.top = GetRandom(0, 300) + "px";
}

function Movecggg() {
    cg[2].style.left = GetRandom(0, 300) + "px";
    cg[2].style.top = GetRandom(0, 300) + "px";
}

function Movecgggg() {
    cg[3].style.left = GetRandom(0, 300) + "px";
    cg[3].style.top = GetRandom(0, 300) + "px";
}

var movegg = setInterval(Movecg, 1000);
var movegg = setInterval(Movecgg, 1000);
var movegg = setInterval(Movecggg, 1000);
var movegg = setInterval(Movecgggg, 1000);

const score2 = document.getElementById("score2");
var score22 = 0;
const audio = new Audio("/audio/audio1.mp3");


cg[0].addEventListener("click", Catch);
function Catch() {
    audio.play();
    score22++;
    score2.innerHTML = score22;
    
}

cg[1].addEventListener("click", Catch);
function Catch() {
    score22++;
    score2.innerHTML = score22;
    audio.play();
}

cg[2].addEventListener("click", Catch);
function Catch() {
    score22++;
    score2.innerHTML = score22;
    audio.play();
}

cg[3].addEventListener("click", Catch);
function Catch() {
    score22++;
    score2.innerHTML = score22;
    audio.play();
}

cg[0].addEventListener("click", function () {
    cg[0].classList.toggle("newState");
    cg[0].classList.add("anim1");
})

cg[1].addEventListener("click", function () {
    cg[1].classList.toggle("newState");
    cg[1].classList.add("anim1");
})

cg[2].addEventListener("click", function () {
    cg[2].classList.toggle("newState");
    cg[2].classList.add("anim1");
})

cg[3].addEventListener("click", function () {
    cg[3].classList.toggle("newState");
    cg[3].classList.add("anim1");
})

var tii = document.getElementById("tii");
var sec = 30;
setInterval(timer, 1000);
    function timer()
    {
        tii.innerHTML = sec;
        sec--;
        if (sec == 0)
        {
            clearInterval(timer);
        }
    }
