
//grab gameWindow handler for updating DOM
let gameWindow = document.getElementById("gameWindow");

let fillRandomCellBTN = document.getElementById("fillCellBTN");
fillRandomCellBTN.addEventListener("click", function(){fillRandomCell(currentPlayer)});

let xFirstBTN = document.getElementById("xFirst");
xFirstBTN.addEventListener("click", function(){ setFirstPlayer("X")});

let oFirstBTN = document.getElementById("oFirst");
oFirstBTN.addEventListener("click", function(){ setFirstPlayer("O")});

let firstMove;

let currentPlayer;

let lastPlayer;

let filledCells = [];

//draw boardCells onto gameContainer

for(i=0; i < 9; i++){
    let boardCell = document.createElement("div");
    boardCell.classList.add("boardCell");
    gameWindow.appendChild(boardCell);
    boardCell.setAttribute("id", i);
    boardCell.addEventListener("click", function(){ toggleCell(boardCell, "playerCharO"); });
    boardCell.addEventListener("contextmenu", function(){ toggleCell(boardCell, "playerCharX"); });
    
}

function toggleCell(boardCell, playerChar){
    if(boardCell.classList.contains(playerChar) != true){
        boardCell.classList.add(playerChar);
    }

}

function fillRandomCell(){

    let randomCellID = Math.floor((Math.random() * 9));

        if(filledCells.length >= 9){return};
        if(filledCells.includes(randomCellID)){fillRandomCell()};

    console.log(randomCellID);
        if(filledCells.includes(randomCellID) != true){
        filledCells.push(randomCellID);
        console.log(filledCells);
        let chosenCell = document.getElementById(randomCellID);
        makePlay(currentPlayer, chosenCell);
        lastPlayer = currentPlayer;
        cyclePlayers();
    }
}

function setFirstPlayer(firstPlayer){
    firstMove = firstPlayer;
    console.log("first player set to: " + firstPlayer);
    currentPlayer = firstPlayer;

}

function makePlay(currentPlayer, chosenCell){
    if(currentPlayer == "X"){
        chosenCell.classList.add("playerCharX")
    }
    if(currentPlayer == "O"){
    chosenCell.classList.add("playerCharO");
    }
}

function cyclePlayers() {
    if(lastPlayer == "X"){
        currentPlayer = "O";
    }
    if(lastPlayer == "O"){
        currentPlayer = "X"
    }
}
