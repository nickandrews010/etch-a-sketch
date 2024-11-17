const container = document.getElementById("container");
const button = document.querySelector("button");

for (let i = 0; i < (16 * 16); i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
}

button.addEventListener("click", () => {
    let num = +prompt("Enter the number of squares you want, per side, in the new grid. (1-100)");
    if (num > 100) {
        alert("The number must be 100 or less.  Please try again.");
        return;
    }
    container.innerHTML = "";

    for (let i = 0; i < (num * num); i++) {
        let square = document.createElement("div");
        square.classList.add("newSquare");
        square.style.flex =  `1 1 ${100 / num}%`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    }
})
