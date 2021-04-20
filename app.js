let screen = document.querySelector(".calc__number");

function reset() {
    screen.innerHTML = "";
}

addEventListener("click", function (event) {
    let btn = event.target;
    if(btn.nodeName === "BUTTON") {
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
    // if(btn.textContent == "+"){
    //     console.log(screen.textContent.slice(0, -1));
    //     calcul.push(Number(screen.textContent.slice(0, -1)));
    //     reset();
    //     console.log(calcul);
    // }


})