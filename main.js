// Player elements
let playerOne = document.querySelector('#player-one');
let playerTwo = document.querySelector('#player-two');
let currentPlayer = document.querySelector('.current-player')
let currentMove = ' '
currentPlayer.innerHTML = "Player one to start";
let gameResult = document.querySelector('#game-result')

// Start button
let startGameButton = document.querySelector('.start-game')
startGameButton.addEventListener('click', function(event) {
  alert('Player one to start')
})

//function colorChange

function backgroundChangeOne(){
  event.target.style.backgroundColor = 'lightcyan';
  event.target.textContent = 'X';
  event.target.style.fontSize = '80px';
  event.target.style.justifyContent = 'center';
}
console.dir(document.querySelector('.box'))

function backgroundChangeTwo(){
  event.target.style.backgroundColor = 'lightyellow'
  event.target.textContent = 'O';
  event.target.style.fontSize = '80px';
  event.target.style.justifyContent = 'center';
}

// Turn taking
let turnTracking = 9
let maxMoves = turnTracking

function moves() {
  // let turns = 9; 
  if (maxMoves %2 === 0 && maxMoves >= 0) {
    maxMoves = maxMoves - 1;  
    maxMoves = true
    backgroundChangeOne()
    currentPlayer.textContent = "It's your turn Player 1"
  } else if (maxMoves % 2 != 0 && maxMoves >= 0) {
    maxMoves = false
    backgroundChangeTwo()
    currentPlayer.textContent = "It's your turn Player 2"
  } else if (maxMoves > 9) {
    alert('Game-over')
  }
}
 

const turnTrackingMoves = document.querySelectorAll('.box');
turnTrackingMoves[0].addEventListener('click', moves)
turnTrackingMoves[1].addEventListener('click', moves)
turnTrackingMoves[2].addEventListener('click', moves)
turnTrackingMoves[3].addEventListener('click', moves)
turnTrackingMoves[4].addEventListener('click', moves)
turnTrackingMoves[5].addEventListener('click', moves)
turnTrackingMoves[6].addEventListener('click', moves)
turnTrackingMoves[7].addEventListener('click', moves)
turnTrackingMoves[8].addEventListener('click', moves)
 
//Extra listeners for game playing function

const grid = document.querySelectorAll('.box');

// Refresh button

const refreshButton = document.querySelector('#new-game')
refreshButton.addEventListener('click', function() {
  for (var i = 1;i <= 9;i++) {
      var cellID = "cell-" + i; 
      document.getElementById(cellID).innerText = "";
      document.getElementById(cellID).style.backgroundColor = "";
  }
})


const gridTurns = document.querySelectorAll('.box')

// extra attempt at counter to get it stopping

gridTurns[0].addEventListener('click', gridCells)
gridTurns[1].addEventListener('click', gridCells)
gridTurns[2].addEventListener('click', gridCells)
gridTurns[3].addEventListener('click', gridCells)
gridTurns[4].addEventListener('click', gridCells)
gridTurns[5].addEventListener('click', gridCells)
gridTurns[6].addEventListener('click', gridCells)
gridTurns[7].addEventListener('click', gridCells)
gridTurns[8].addEventListener('click', gridCells)

// extra attempt at counter to get it stopping

function gridCells(){
  if (gridCells === 0){
    gridCells++
   } else if (gridCells >= 9) {
    alert('game over!')
  }
}

// extra attempt at counter to get it stopping
// Game cells as empty array, to be allocated as turns taken
//const boxes = document.querySelectorAll('.box');
//let gameValues = Array.from(boxes)
//let gameGrid = ['','','','','','','','','',]
//for (let j = 0; j <=9 ; j++) {
//if (gameValues.innerHTML === "X" && "O")
//  alert("wah!")
//}


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
  if (firstCell.innerHTML === "X" && secondCell.innerHTML === "X" && thirdCell.innerHTML === "X") {
  gameResult.innerHTML = "Crosses won!"
  alert("Crosses won!")
  } else if (firstCell.innerHTML === "O" && secondCell.innerHTML === "O" && thirdCell.innerHTML === "O") {
  gameResult.innerHTML = "Noughts won!"
  alert("Noughts won!")
  }

//secondRowWin
  else if (fourthCell.innerHTML === "X" && fifthCell.innerHTML === "X" && sixthCell.innerHTML === "X") {
  gameResult.innerHTML = "Crosses won!"
  alert("Crosses won!")
  } else if (fourthCell.innerHTML === "O" && fifthCell.innerHTML === "O" && sixthCell.innerHTML === "O") {
  gameResult.innerHTML = "Noughts won!"
  alert("Noughts won!")
  }


//thirdRowWin
  else if (seventhCell.innerHTML === "X" && eigthCell.innerHTML === "X" && ninthCell.innerHTML === "X") {
  gameResult.innerHTML = "Crosses won!"
  alert("Crosses won!")
  } else if (seventhCell.innerHTML === "O" && eigthCell.innerHTML === "O" && ninthCell.innerHTML === "O") {
  gameResult.innerHTML = "Noughts won!"
  alert("Noughts won!")
  } 

// RESULTS COLUMN FUNCTIONS  

//firstColumnWin
  else if (firstCell.innerHTML === "X" && fourthCell.innerHTML === "X" && seventhCell.innerHTML === "X") {
   alert("Crosses won!")
  } else if (firstCell.innerHTML === "O" && fourthCell.innerHTML === "O" && seventhCell.innerHTML === "O") {
  alert("Noughts won!")
  }

//secondColumnWin
  else if (secondCell.innerHTML === "X" && fifthCell.innerHTML === "X" && eigthCell.innerHTML === "X") {
   alert("Crosses won!")
  } else if (secondCell.innerHTML === "O" && fifthCell.innerHTML === "O" && eigthCell.innerHTML === "O") {
  alert("Noughts won!")
  }

/// thirdColumnWin 
  else if (thirdCell.innerHTML === "X" && sixthCell.innerHTML === "X" && ninthCell.innerHTML === "X") {
   alert("Crosses won!")
  } else if (thirdCell.innerHTML === "O" && sixthCell.innerHTML === "O" && ninthCell.innerHTML === "O") {
  alert("Noughts won!")
  }

// firstDiganolWin  

  else if (firstCell.innerHTML === "X" && fifthCell.innerHTML === "X" && ninthCell.innerHTML === "X") {
   alert("Crosses won!")
  } else if (firstCell.innerHTML === "O" && fifthCell.innerHTML === "O" && ninthCell.innerHTML === "O") {
  alert("Noughts won!")
  } 

// second DiganolWin  
  else if (thirdCell.innerHTML === "X" && fifthCell.innerHTML === "X" && seventhCell.innerHTML === "X") {
   alert("Crosses won!")
  } else if (thirdCell.innerHTML === "O" && fifthCell.innerHTML === "O" && seventhCell.innerHTML === "O") {
  alert("Noughts won!")
  } 
  }
  

// All boxes into a nodelist
//const boxes = document.querySelectorAll('.box');

// Convert boxes from NodeList to an array
//var boxesArr = Array.from(boxes);

// Convert boxes from NodeList to an array
//var boxesArr = Array.from(boxes);
