let btn = document.querySelectorAll(".number");
function reset() {
    document.querySelector(".calc__number").innerHTML = "";
}


addEventListener("click", function(event) {
    let btn = event.target;
    let screen = document.querySelector("p");
    screen.append(btn.textContent);
    if(btn.textContent === "AC"){
        event.stopPropagation();
        reset()
    }

});
