document.addEventListener("DOMContentLoaded", function() {
    const square = document.getElementById("square");

    square.addEventListener("click", function() {
        teleportSquare();
        changeColor();
    });

    function teleportSquare() {
        const windowWidth = window.innerWidth - square.offsetWidth;
        const windowHeight = window.innerHeight - square.offsetHeight;

        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY = Math.floor(Math.random() * windowHeight);

        square.style.left = randomX + "px";
        square.style.top = randomY + "px";
    }

    function changeColor() {
        const colors = ["red", "green", "blue"];
        const currentColor = square.style.backgroundColor;

        let newColor = colors[0];
        if (currentColor === colors[0]) {
            newColor = colors[1];
        } else if (currentColor === colors[1]) {
            newColor = colors[2];
        }

        square.style.backgroundColor = newColor;
    }
});