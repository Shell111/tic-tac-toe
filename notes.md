#Notes on Tic Tac Toe project

## What to do

Render a game in the browser
Switch turns between more than one player
Design logic for winning & visually display which player won
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)

### Things to consider
Grid layout in html & css
9 x 9 
ids against the cells for targeting
Player 1 & player 2 with colour allocation to each
-- may need buttons to distinguish
-- and to enable switching turns
DOM interaction 
functions & conditionals to check for winning, game over etc
loop can iterate through each element
Can arrays be use for winning scenarios
Check who won

 



### Planning
Start with a mock up in html

### Steps
Enable boxes to be clicked



### Notes on making the board an array
let board = [0,0,0,0,0,0,0,0,0]
function player2Plays() {
  board[4] = 2;
}

// Do logic only in the code
// separate presentation step to acutlaly display the board to the user in HTML

function displayTheBoard(board) {
  // create all the divs for us and fill them with the correct values
  // click handlers etc
  }
