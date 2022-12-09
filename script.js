function populateBoard(size) {
    let board = document.querySelector(".grid-container");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement('afterbegin', square);
    }
}
 
populateBoard(100);



// document.getElementById("container").getElementsByTagName("div").className += "square";

















