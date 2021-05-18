
//grab gameWindow handler for updating DOM
let gameWindow = document.getElementById("gameWindow");

//draw boardCells onto gameContainer

for(i=0; i < 9; i++){
    let boardCell = document.createElement("div");
    boardCell.classList.add("boardCell");
    gameWindow.appendChild(boardCell);
}
