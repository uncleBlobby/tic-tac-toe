const Player = (name) => {
    const sayName = () => console.log(`hi I'm ${name}`);
    const checkBoard = () => {
        //function to read the status of the current board
    };

    const makePlay = (e) => {
        //function to make next play based on the status of the current board
        //player choice is the event target div
        //for player it is clicked, for AI it is ????

    };
    return {sayName};
};

const player = Player("player");
const enemy = Player("enemy");


player.sayName();
enemy.sayName();

const gameBoard = (() => {
    const gridCells = [
                        0, 1, 2,
                        3, 4, 5,
                        6, 7, 8
                    ];

    let playerOwned =   [
                            null
                        ];
    let enemyOwned =    [
                            null
                        ];
    let acceptPlayerMoveAt = () => {
        //function to accept player move (makePlay)
    }
    return {
        gridCells, playerOwned, enemyOwned, acceptPlayerMoveAt
    };
})();

const displayController = ((gameBoard) => {
    const gameContainer = document.getElementById("gameContainer");

    const drawGameField = () => {
        //function to draw the gameField (blank grid) of nine cells
        for(i = 0; i < 9; i++){
            //each gridCell is a separate div in the grid
            let gridCell = document.createElement("div");
            //each gridCell has the class boardCell (to make it visible/hover)
            gridCell.classList.add("boardCell");
            //each gridCellID is equal to its position in the grid starting @ zero
            let gridCellID = i;
            //each gridCell id is set to its own ID
            gridCell.setAttribute("id", gridCellID);
            //each gridCell is given a listener to handle click event
            gridCell.addEventListener("click", function(){
                console.log("clicked boardcell" + gridCellID);
            })
            //gridCell is appended to parent node (gameContainer)
            gameContainer.appendChild(gridCell);
        }

    }
    return {gameContainer, drawGameField};
})();

console.log(gameBoard.gridCells);

console.log(gameBoard.playerOwned);
console.log(gameBoard.enemyOwned);

displayController.drawGameField();