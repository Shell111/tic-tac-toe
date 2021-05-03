# Notes on Tic Tac Toe project

### What to do
Render a game in the browser
Switch turns between more than one player
Design logic for winning & visually display which player won
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)

### Things to consider
Grid layout in html & css: 3 by 3
Classes & ids against the cells for targeting
Player 1 & player 2 with colour allocation to each
-- may need buttons to distinguish, or a status message
-- and to enable switching turns
DOM interaction 
Loops can iterate through each element
Arrays be use for winning scenarios
Check who won

## PSEUDO CODE 

### Visual wireframing
Create a wireframe for a visual of the game being built
### HTML
Create basic elements in HTML
-- add grid layout
---- labels with IDs or classes for easy JS targeting
-- buttons to start game, maybe one for each player or just one for game status
### CSS
Initially add basic styling so elements & interactions can be seen
Last step - enhance all the styling

### JS (initial plan)
Initial plan is to work with arrays

Create an empty array for all the grid boxes so all elements can be targetted for interaction

Create nested arrays for all winning combinations in case needing to target separately

Create arrays for draw outcomes
-- will also create separate arrays for each combo in case this method is easier for targeting

Develop a way for array index to be captured in computer memory, and allocated from array (as turns taken)
-- use .innerText or .textContent to provide visual interaction of turn taken
-- use a for loop to set maximum number of iterations
-- provide status update on page using .innerText on element 
---- i.e. Game status: Player 1 moves now 

Develop way for X & O to be allocated to grid boxes, or perhaps change the background colour
-- Such as when a player has their turn, an interaction occurs to confirm it's happened 
-- then alert for the next player's turn
-- enable the X & O to interchange - possible use of the conditional operator or something similar to counters

Create validation check for winning arrays 
-- Does a player have three in a row on row 1
-- Does a player have three in a row on row 2
-- and so on for all rows, columns and diagonals
-- check these against the winning arrays with for loops & IF statements

Develop way for the game to be validated as true or 'game won', or draw
-- Use conditionals, IF statements or boolean values to provide checks and validations

Use for loops again to iterate through array and allocate styling or .innerText values.

Think about the game being active & inactive
-- i.e. what needs to happen to 'turn game on' or reset game (eg. IF statement or boolean true or false value)

Create functions to use for repeated code i.e. updated .innerText

### keep it as simple as you can




/////////

Notes on making the grid an array

let board = ['', '', '','', '', '','', '', ''],
function player2Plays() {
  board[4] = 2;
}
