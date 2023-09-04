// Random function for Dice
function random1() {
    const rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}
function random2() {
    const rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}

//Disabling any one button at load

function loadran() {
    const dice = document.getElementById("dice");
    dice.src = "./images/" + random1() + ".png"
}
const randload = Math.floor(Math.random() * 2) + 1;
function load() {
    if (randload === 1) {
        button1.setAttribute("disabled", " ")
        loadran();
    } else {
        button2.setAttribute("disabled", " ")
        loadran();
    }
}
load();


//  Button created and function created for click event
button1 = document.getElementById("button1");
button1.addEventListener("click", rolldie1);

button2 = document.getElementById("button2");
button2.addEventListener("click", rolldie2);

function rolldie1() {
    let ran1 = random1();
    const dice = document.getElementById("dice");
    dice.src = "./images/" + ran1 + ".png"
    button1.setAttribute("disabled", "");
    button2.removeAttribute("disabled");
    var initial1 = document.getElementById("p1-id").innerHTML;
    var add1 = parseInt(initial1) + parseInt(ran1);
    document.getElementById("p1-id").innerHTML = add1;
    document.getElementById("h1").innerHTML = "Player-2 to Play"
    if (add1 >= 30) {
        button1.disabled = true;
        button2.disabled = true;
        reset.disabled = false;
        const win = document.getElementById("h1");
        win.innerHTML = "Player-1 Wins💥💫";
    }
}

function rolldie2() {
    let ran2 = random2();
    const dice = document.getElementById("dice");
    dice.src = "./images/" + ran2 + ".png"
    button2.setAttribute("disabled", "");
    button1.removeAttribute("disabled");
    var initial2 = document.getElementById("p2-id").innerHTML;
    var add2 = parseInt(initial2) + parseInt(ran2);
    document.getElementById("p2-id").innerHTML = add2;
    document.getElementById("h1").innerHTML = "Player-1 to Play"
    if (add2 >= 30) {
        button1.disabled = true;
        button2.disabled = true;
        reset.disabled = false;
        const win = document.getElementById("h1");
        win.innerHTML = "Player-2 Wins 💥😎";
    }
}


//Button created and function created for reset function
const reset = document.getElementById("rst");
reset.disabled = true;
reset.addEventListener("click", () => {
    document.getElementById("p1-id").innerHTML = 0;
    document.getElementById("p2-id").innerHTML = 0;
    const random = Math.floor(Math.random() * 2) + 1
    if (random === 1) {
        button1.disabled = false;
    } else {
        button2.disabled = false;
    }
    reset.disabled = true
    if (button1.disabled == false) {
        document.getElementById("h1").innerHTML = "Player-1 to Play"
    } else {
        document.getElementById("h1").innerHTML = "Player-2 to Play"
    }
})


//Creating Heading Dynamically
if (button1.disabled == false) {
    document.getElementById("h1").innerHTML = "Player-1 to Play"
} else {
    document.getElementById("h1").innerHTML = "Player-2 to Play"
}