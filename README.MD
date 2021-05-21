--main goal: have as little /global/ code as possible.
        rule of thumb: if you only need ONE of something (gameBoard, displayController), use a module.
        rule of thumb: if you need multiples of something (players), create them with factories

--each piece of functionality should be able to fit into the game, player, or gameboard objects
        take care to put them in logical places.


to-dos

-- develop grid layout display for gameboard
        each grid square has an id that corresponds to its "location" on the gameboard

        __|___|__       [0, 1, 2,
        __|___|__        3, 4, 5,
          |   |          6, 7, 8]

-- grid squares need listeners for player click ("playerMove") in order to make their plays
-- AI opponent does not need listeners for click but rather must have "smartlogic" choosing position of plays
        v0.1 AI currently chooses random no matter what
        if a cell is already played it blocks being played again (check if a cell contains a playerChar, if not then go ahead)

-- gameboard must update to display latest move after every turn

-- gameboard must always alternate playerTurn between X and O

-- gameBoard must hold winning / drawing combinations in memory and check against current gameboard position each turn
        no wins (definitely no draws) should occur before the initial three turns of the first player (each win condition requires at least 3 plays)

-- gameWinState should show an alert/display congratulating the winner
-- allow player to enter name??
-- high score // matches won leaderboard??
-- add button to start new // restart existing // game

