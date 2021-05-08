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

### **Visual wireframing**

Create a wireframe to demonstrate the visual layout of the game

### **HTML**

1. Create basic elements in HTML
2. Add grid layout and label with IDs and classes for targeting in JS and the DOM
3. Add button tags to enable game refresh or new game, possibly for two players too
4. Add HTML element for visually displaying game result (which will be targeted via the DOM)

### **CSS**

1. Initially add basic styling so elements & interactions can be seen and compared
2. Last step - enhance all the styling and improve UX experience
3. Possibly add modal pop-up to display game results

### **JS (initial plan)**
Create a grid element (or elements) that can store the X & Os, and be evaluated for turn taking
  — add eventListeners to each grid cell, so the click can be registered and tracked

Create a counter that will enable turn taking between two players

Create a variable to store the game result and allow for interaction through the DOM

Create a variable for the Start game / or Restart button 

Create a function that will run the alternate moves, and allow Xs & Ox to be placed in.
  — Create functions that will allow for DOM changes and interaction

Track the counter via a loop or other method so the moves of the game can end at 9

Create a variable that can track the moves i.e. it's player one's turn, it's player two's turn
  — Enable the textContent of the the related HTML element to change to visually display info

Create functions that will enable the HTML grid cells to change once clicked

Create functions and If statements that will evaluate the grid cells for winning combinations of:
  — first row, second row, third row, 
  — first column, second column, third column
  — first diagonal, second diagonal
  — and draw condition (when no more moves can be played)
  — Visually display the results via the DOM when a game is complete by the game result element (mentioned above)