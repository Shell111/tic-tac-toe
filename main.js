// Elements
//let playerOne = document.querySelector('#player-one');
//let playerTwo = document.querySelector('#player-two');
let currentPlayer = document.querySelector('.current-player') // this connects to the background change function
let currentMove = ' '
currentPlayer.innerHTML = "Player one to start"; 

// displays game result
let gameResult = document.querySelector('#game-result')
const resultPopup = document.querySelector('.modal-wrapper')
const resultDisplay = document.querySelector('.modal-text')
const closeBtn = document.querySelector('.close')
// the below has errors
//let drawAlert = document.querySelector('.draw')

let counter = 0
// Start button - which forces cells to clear
let startGameButton = document.querySelector('.start-game')
startGameButton.addEventListener('click', function(event) {
  for (var i = 1;i <= 9;i++) {
    var cellID = "cell-" + i; 
    document.getElementById(cellID).textContent = "";
    document.getElementById(cellID).style.backgroundColor = "";
  }
  resultPopup.classList.add('visible')
  resultDisplay.innerHTML ="Play starts now!"
  counter = 0
})

// gridCells function for turn-taking -- there is an error here

function gridCells(){
  if (counter == 9) {
    return;
  }
  counter++;
  if (counter >= 9) {
  resultPopup.classList.add('visible')
  // The below is appearing only once and halfway through a game if the first game isn't a draw
  resultDisplay.innerHTML = "Looks like it's a draw!"
  // drawAlert.textContent = 'draw alert'
  console.log(currentPlayer)
  }
} 

// Function for alternate turns
maxMoves = 9;

function moves(cellElement) {
  if (cellElement.textContent !== "") {
    console.log(cellElement.textContent)
    return
  }
  if (maxMoves %2 === 0) {
    maxMoves = true
    backgroundChangeOne()
    currentPlayer.textContent = "It's your turn Player 1"
  } else if (maxMoves %2 !== 0) {
    maxMoves = false
    backgroundChangeTwo()
    currentPlayer.textContent = "It's your turn Player 2";
  } 
  if (maxMoves >= 9) {
    currentPlayer.textContent = "draw!";
    maxMoves = null
    alert('game over!')
    //return
  }
}

//Event listeners for gridCells function
const gridTurns = document.querySelectorAll('.box');
gridTurns[0].addEventListener('click', gridCells)
gridTurns[1].addEventListener('click', gridCells)
gridTurns[2].addEventListener('click', gridCells)
gridTurns[3].addEventListener('click', gridCells)
gridTurns[4].addEventListener('click', gridCells)
gridTurns[5].addEventListener('click', gridCells)
gridTurns[6].addEventListener('click', gridCells)
gridTurns[7].addEventListener('click', gridCells)
gridTurns[8].addEventListener('click', gridCells)


//function for backgroundColor change
function backgroundChangeOne(){
  event.target.style.backgroundColor = 'lightcyan';
  event.target.textContent = 'X';
  event.target.style.fontSize = '80px';
  event.target.style.justifyContent = 'center';
}

function backgroundChangeTwo(){
  event.target.style.backgroundColor = 'lightyellow'
  event.target.textContent = 'O';
  event.target.style.fontSize = '80px';
  event.target.style.justifyContent = 'center';
}

// Alternating turns
//let turnTracking = 9
//let maxMoves = turnTracking


// event listeners for the alternate moves function
const turnTrackingMoves = document.querySelectorAll('.box');

turnTrackingMoves[0].addEventListener('click', function(event){
  moves(event.target)
})
turnTrackingMoves[1].addEventListener('click', function(event) {
  moves(event.target)
})
turnTrackingMoves[2].addEventListener('click', function(event) {
  moves(event.target)
})
turnTrackingMoves[3].addEventListener('click', function(event){
  moves(event.target)
})
turnTrackingMoves[4].addEventListener('click', function(event) {
  moves(event.target)
})
turnTrackingMoves[5].addEventListener('click', function(event) {
  moves(event.target)
})
turnTrackingMoves[6].addEventListener('click', function(event) {
  moves(event.target)
})
turnTrackingMoves[7].addEventListener('click', function(event){
  moves(event.target)
})
turnTrackingMoves[8].addEventListener('click', function(event){
  moves(event.target)
})


// Refresh button - clears all boxes
const refreshButton = document.querySelector('#new-game')
refreshButton.addEventListener('click', function() {
  for (var i = 1;i <= 9;i++) {
    var cellID = "cell-" + i; 
    document.getElementById(cellID).textContent = "";
    document.getElementById(cellID).style.backgroundColor = "";
    gameResult.innerHTML = "Player one to start!"
    counter = 0
  }
})

// This was an attempt to track the cell data

// All boxes into a nodelist
/**const boxes = document.querySelectorAll('.box');

// This seems to be working for capturing the array
// Selecting the boxes
const selectEachBox =
function(){
  event
  const selectBox = event.target;
  //console.log(event.target)
  const selectBoxRange = parseInt(selectBox.getAttribute('data-cell'))
  console.log(selectBox, selectBoxRange)
}

// function to find the index of the box
function checkBoxes(node){
  boxes.forEach(function(boxes) {
    boxes.addEventListener('click', selectEachBox)
  })
}
checkBoxes()
*/


// RESULTS - ROWS
let firstCell = document.getElementById('cell-1')
let secondCell = document.getElementById('cell-2')
let thirdCell = document.getElementById('cell-3')
firstCell.addEventListener('click', gamePlay) 
secondCell.addEventListener('click', gamePlay) 
thirdCell.addEventListener('click', gamePlay) 

let fourthCell = document.getElementById('cell-4')
let fifthCell = document.getElementById('cell-5')
let sixthCell = document.getElementById('cell-6')
fourthCell.addEventListener('click', gamePlay) 
fifthCell.addEventListener('click', gamePlay) 
sixthCell.addEventListener('click', gamePlay) 

let seventhCell = document.getElementById('cell-7')
let eigthCell = document.getElementById('cell-8')
let ninthCell = document.getElementById('cell-9')
seventhCell.addEventListener('click', gamePlay) 
eigthCell.addEventListener('click', gamePlay) 
ninthCell.addEventListener('click', gamePlay) 


// RESULTS FUNCTIONS  

function gamePlay() {
//firstRowWin
  if (firstCell.textContent === "X" && secondCell.textContent === "X" && thirdCell.textContent === "X") {
    gameResult.innerHTML = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
    //gameActive = false;
    //return
  } else if (firstCell.textContent === "O" && secondCell.textContent === "O" && thirdCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML = "Noughts won!"
  }

//secondRowWin
  else if (fourthCell.textContent === "X" && fifthCell.textContent === "X" && sixthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (fourthCell.textContent === "O" && fifthCell.textContent === "O" && sixthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }


//thirdRowWin
  else if (seventhCell.textContent === "X" && eigthCell.textContent === "X" && ninthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (seventhCell.textContent === "O" && eigthCell.textContent === "O" && ninthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  } 

// RESULTS COLUMN FUNCTIONS  

//firstColumnWin
  else if (firstCell.textContent === "X" && fourthCell.textContent === "X" && seventhCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (firstCell.textContent === "O" && fourthCell.textContent === "O" && seventhCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

//secondColumnWin
  else if (secondCell.textContent === "X" && fifthCell.textContent === "X" && eigthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (secondCell.textContent === "O" && fifthCell.textContent === "O" && eigthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

/// thirdColumnWin 
  else if (thirdCell.textContent === "X" && sixthCell.textContent === "X" && ninthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (thirdCell.textContent === "O" && sixthCell.textContent === "O" && ninthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

// firstDiganolWin  

  else if (firstCell.textContent === "X" && fifthCell.textContent === "X" && ninthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (firstCell.textContent === "O" && fifthCell.textContent === "O" && ninthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  } 

// second DiganolWin  
  else if (thirdCell.textContent === "X" && fifthCell.textContent === "X" && seventhCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (thirdCell.textContent === "O" && fifthCell.textContent === "O" && seventhCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  } 
}

// POP UP CLOSE POPUP
const closePopup = () => {
  resultPopup.classList.remove('visible')
}
closeBtn.addEventListener('click', closePopup)






// variable for each cell - this isn't doing anything
/**
let cell1 = document.querySelector('#cell-1')
cell1 = true
if (cell1 == "X" || cell1 == "O") {
  cell1 = false;
}
console.log(cell1)

let cell2 = document.querySelector('#cell-2')
let cell3 = document.querySelector('#cell-3')
let cell4 = document.querySelector('#cell-4')
let cell5 = document.querySelector('#cell-5')
let cell6 = document.querySelector('#cell-7')
let cell8 = document.querySelector('#cell-8')
let cell9 = document.querySelector('#cell-9')

var cellBoxes = [cell1, cell2, cell3, cell4, cell5, cell6, cell8, cell9]

// attempt at getting boxes to lock at draw  
let gameActive = true;
let gameState = ['','','','','','','','','']

for (let i = 0; i < cellBoxes.length; i++)
if (cellBoxes != cellBoxes.includes('')){
gameActive = false
}
 */