
//grab gameWindow handler for updating DOM
let gameWindow = document.getElementById("gameWindow");

//draw boardCells onto gameContainer

for(i=0; i < 9; i++){
    let boardCell = document.createElement("div");
    boardCell.classList.add("boardCell");
    boardCell.setAttribute("id", i);
    gameWindow.appendChild(boardCell);
}

//store array of plays in memory

let boardCellPlays = [];

//write player move to board cell

for(i=0; i < 9; i++){
    let thisBoardCell = document.getElementById(i);
    thisBoardCell.addEventListener("click", console.log("clicked cell"));
}


