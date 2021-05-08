// Player moves variables
let currentPlayer = document.querySelector('.current-player') // this connects to the background change function
let currentMove = ' '
currentPlayer.innerHTML = "Player one to start!"; 

// Variables for displaying game result
let gameResult = document.querySelector('#game-result')
const resultPopup = document.querySelector('.modal-wrapper')
const resultDisplay = document.querySelector('.modal-text')
const closeBtn = document.querySelector('.close')


// Start button - this forces cells to clear
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
  gameResult.innerHTML = "Player one to start!"
})


// Counter variable 
let counter = 0

// Function for turn-taking count
function gridCells(){
  if (counter == 9) {
    return;
  }
  counter++;
  if (counter >= 9) {
  resultPopup.classList.add('visible')
  resultDisplay.innerHTML = "Looks like it's a draw!"
  gameResult.innerHTML = "It's a draw!"
  }
} 

// Function for alternating turns and completing the cells with X or O
maxMoves = 9;
function moves(cellElement) {
  if (cellElement.textContent !== "") {
    console.log(cellElement.textContent)
    return
  }
  if (maxMoves %2 === 0) {
    maxMoves = true
    backgroundChangeOne()
    currentPlayer.textContent = "It's your turn Player one"
  } else if (maxMoves %2 !== 0) {
    maxMoves = false
    backgroundChangeTwo()
    currentPlayer.textContent = "It's your turn Player two";
  } 
  if (maxMoves >= 9) {
    currentPlayer.textContent = "draw!";
  }
}

// Event listeners for gridCells function
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


// Function for backgroundColor change
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

// Event listeners for the alternate moves function
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

// Results variables and eventListeners
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


// Results function 
function gamePlay() {
//firstRowWin
  if (firstCell.textContent === "X" && secondCell.textContent === "X" && thirdCell.textContent === "X") {
    gameResult.innerHTML = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (firstCell.textContent === "O" && secondCell.textContent === "O" && thirdCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML = "Noughts won!"
  }

// secondRowWin
  else if (fourthCell.textContent === "X" && fifthCell.textContent === "X" && sixthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (fourthCell.textContent === "O" && fifthCell.textContent === "O" && sixthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

// thirdRowWin
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
// firstColumnWin
  else if (firstCell.textContent === "X" && fourthCell.textContent === "X" && seventhCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (firstCell.textContent === "O" && fourthCell.textContent === "O" && seventhCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

// secondColumnWin
  else if (secondCell.textContent === "X" && fifthCell.textContent === "X" && eigthCell.textContent === "X") {
    gameResult.textContent = "Crosses won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Crosses won!"
  } else if (secondCell.textContent === "O" && fifthCell.textContent === "O" && eigthCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
  }

// thirdColumnWin 
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

// NEW GAME BUTTON - clears all boxes
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

// POP UP CLOSE FUNCTION
const closePopup = () => {
  resultPopup.classList.remove('visible')
}
closeBtn.addEventListener('click', closePopup)