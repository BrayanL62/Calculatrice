let screen = document.querySelector(".calc__number");
function reset() {
    screen.innerHTML = "";
}

addEventListener("click", function(event) {
    let btn = event.target;
    screen.append(btn.textContent);
    console.log(screen.textContent);
    
    if(btn.textContent == "AC"){
        console.log(screen.textContent.slice(0, -2));
        reset();
    }
    if(btn.textContent == "=") {
        let calcul = [];
        console.log(screen.textContent.slice(0, -1));
        calcul.push(screen.textContent.slice(0, -1));
        console.log(calcul);
        reset();
        screen.append(eval(calcul[0]));
        calcul.pop();
    }
    // if(btn.textContent == "+"){
    //     console.log(screen.textContent.slice(0, -1));
    //     calcul.push(Number(screen.textContent.slice(0, -1)));
    //     reset();
    //     console.log(calcul);
    // }
    

})