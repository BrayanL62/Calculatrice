let btn = document.querySelectorAll(".number");
function reset() {
    document.querySelector(".calc__number").innerHTML = "";
};
let screen = document.querySelector("p");
let operator = document.querySelectorAll(".blue");
// let screen1 = screen.slice(0, -1); 
let calcul = [];


addEventListener("click", function(event) {
    let btn = event.target;
    screen.append(btn.textContent);
    if(btn.textContent === "AC"){
        reset()
    }
    else if(btn.textContent === "+"){
        calcul.push(screen.textContent.slice(0,-1));
        console.log(calcul)
        reset();
    }
});
