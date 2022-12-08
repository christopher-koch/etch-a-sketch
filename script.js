const container = document.querySelector('#grid-container');
let gridWidth = 480;
let gridSize = 16;
let squareSize = gridWidth / gridSize;

function createGrid (num) {
    let amountOfSquares = gridSize * gridSize;
    let startAmount = 0;

    while (amountOfSquares > startAmount) {
        startAmount++;
        const div = document.createElement('div');
        div.classList.add('square') //Hier direkt die squaresize dranhängen?
        container.append(div);
    } 

}

createGrid(gridSize);



// document.getElementById("container").getElementsByTagName("div").className += "square";

















