let body = document.querySelector("body");
let spec = document.querySelectorAll(".blue");
let number = document.querySelectorAll(".number");
let calc = document.querySelector(".calc");
let screen = document.querySelector(".calc__number");
let checkbox = document.querySelector("input");

function reset() {
    screen.innerHTML = "";
}

addEventListener("click", function (event) {
    let btn = event.target;
    if (btn.nodeName === "BUTTON") {
        screen.append(btn.textContent);
        if (btn.textContent == "AC") {
            reset();
        }
        if (btn.textContent == "=") {
            let calcul = [];
            calcul.push(screen.textContent.slice(0, -1));
            reset();
            screen.append(eval(calcul[0]));
            calcul.pop();
        }
    }
})

checkbox.addEventListener("click", function () {
    body.classList.toggle("body_dark");
    calc.classList.toggle("calc_dark");
    let i = 0;
    let ii = spec.length;
    let j = 0;
    let jj = number.length;
    for (i; i < ii; i++) {
        spec[i].classList.toggle("dark_number");
    }
    for (j; j < jj; j++) {
        number[j].classList.toggle("dark_number");
    }
})