# Notes on Tic Tac Toe project

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
Create a wireframe
Start with a mock up in html
Write Pseudo code
// Create HTML so there's a visual to reference
// Create a grid layout to simulate game visual
// Think about how JS and HTML will interact
// Have a way for users to click and add their X & O
// How will the users know who goes first
// Change the colour of the cells when they are clicked
// Does a player have three in a row on row 1

// Does a player have three in a row on row 2
// Does a player have three in a row on row on row 3
// Repeat for each winning combination (column & diagonal)
// How is this checked?
// Might you use arrays for this?
Be able to get all the values in row 1, or 2, or 3
// Add a class to each element so it can be referenced
// Let each clicked box change to a color or change x or 0 depending on player click
// Create functions to enable interactions
// Create an alert when a player has won or if there is a draw


// Nested function calls
checkIfUserWon();

function checkIfUserWon(){
  if (doTheyHaveThreeInARow()) {
    // they won
    console.log('they won')
  } else {
    // keep playing
  }
}

function doTheyHaveThreeInARow(){
  if(doTheyHaveThreeInARow1() || doTheyHaveThreeInARow2() || doTheyHaveThreeInARow3());
  }
doTheyHaveThreeInARow()

///////

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
