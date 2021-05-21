
//grab gameWindow handler for updating DOM
let gameWindow = document.getElementById("gameWindow");
//button to fill random cell with current player's mark
let fillRandomCellBTN = document.getElementById("fillCellBTN");
fillRandomCellBTN.addEventListener("click", function(){fillRandomCell(currentPlayer)});

//buttons to set first player either X or O //testing alternation
let xFirstBTN = document.getElementById("xFirst");
xFirstBTN.addEventListener("click", function(){ setFirstPlayer("X")});

let oFirstBTN = document.getElementById("oFirst");
oFirstBTN.addEventListener("click", function(){ setFirstPlayer("O")});

//variable initialization
//
//variable to decide who is making the first play
let firstMove;
//variable to hold the player of the current turn
let currentPlayer;
//currentPlayer becomes the last player at the end of their turn//last play was made by X, therefore current play is not X, and so on
let lastPlayer;
//array to hold currently filled cells by ID
let filledCells = [];


//list of possible winning combinations

let winningCombos = [
                 {"a": "0", "b": "1", "c" : "2"},
                 {"a": "3", "b": "4", "c" : "5"},
                 {"a": "6", "b": "7", "c" : "8"},
                 {"a": "0", "b": "3", "c" : "4"},
                 {"a": "1", "b": "4", "c" : "7"},
                 {"a": "3", "b": "5", "c" : "8"},
                 {"a": "0", "b": "4", "c" : "8"},
                 {"a": "2", "b": "4", "c" : "6"},
                ];

let currentGameState = 
                {
                    "cell0": "empty", "cell1": "empty", "cell2" : "empty",
                    "cell3": "empty", "cell4": "empty", "cell5" : "empty",
                    "cell6": "empty", "cell7": "empty", "cell8" : "empty"
                };

let gameWinner = undefined;
let gameIsDraw = false;


//function to check currentPlayer's latest move against all possible win conditions ???? it works
function checkWinners(same) {
    if(
       ((currentGameState.cell0 != "empty") && (currentGameState.cell0 == same) && (currentGameState.cell1 == same) && (currentGameState.cell2 == same))
    || ((currentGameState.cell3 != "empty") && (currentGameState.cell3 == same) && (currentGameState.cell4 == same) && (currentGameState.cell5 == same))
    || ((currentGameState.cell6 != "empty") && (currentGameState.cell6 == same) && (currentGameState.cell7 == same) && (currentGameState.cell8 == same))
    || ((currentGameState.cell0 != "empty") && (currentGameState.cell0 == same) && (currentGameState.cell3 == same) && (currentGameState.cell4 == same))
    || ((currentGameState.cell1 != "empty") && (currentGameState.cell1 == same) && (currentGameState.cell4 == same) && (currentGameState.cell7 == same))
    || ((currentGameState.cell3 != "empty") && (currentGameState.cell3 == same) && (currentGameState.cell5 == same) && (currentGameState.cell8 == same))
    || ((currentGameState.cell0 != "empty") && (currentGameState.cell0 == same) && (currentGameState.cell4 == same) && (currentGameState.cell8 == same))
    || ((currentGameState.cell2 != "empty") && (currentGameState.cell2 == same) && (currentGameState.cell4 == same) && (currentGameState.cell6 == same))   
    )
        {
            gameWinner = same;
            console.log(gameWinner);
            stopGame(gameWinner);
        }
    
    }

//stops game with alert when a winner is called;
function stopGame(gameWinner) {
    alert(gameWinner + "has won the match.");

}

//function to check if all cells filled.. 
//if allcellsfilled && nowinnercalled then game is a draw

function checkAllCells(){
    if((filledCells.length = 9) && (gameWinner = undefined)){
        gameIsDraw = true;
    }
}


//draw boardCells onto gameContainer
for(i=0; i < 9; i++){
    let boardCell = document.createElement("div");
    boardCell.classList.add("boardCell");
    gameWindow.appendChild(boardCell);
    boardCell.setAttribute("id", i);
    /*
    boardCell.addEventListener("click", function(){ toggleCell(boardCell, "playerCharO"); });
    boardCell.addEventListener("contextmenu", function(){ toggleCell(boardCell, "playerCharX"); });
    */    
}

function toggleCell(boardCell, playerChar){
    if(boardCell.classList.contains(playerChar) != true){
        boardCell.classList.add(playerChar);
    }

}

//this fillRandomCell() function is current ly responsible for the UI move // eventually won't be random, but instead weighted toward advantageous situations


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
        updateGameState(currentPlayer, randomCellID);
        console.log(currentGameState);
        checkWinners(currentPlayer);
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
        chosenCell.classList.add("playerCharX");    
    }
    if(currentPlayer == "O"){
        chosenCell.classList.add("playerCharO");
    }
}

function updateGameState(currentPlayer, randomCellID) {
    cellToUpdate = "cell" + randomCellID;
    currentGameState[cellToUpdate] = currentPlayer;
}

function cyclePlayers() {
    if(lastPlayer == "X"){
        currentPlayer = "O";
    }
    if(lastPlayer == "O"){
        currentPlayer = "X"
    }
}
