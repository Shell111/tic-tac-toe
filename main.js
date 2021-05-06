// Player elements
let playerOne = document.querySelector('#player-one');
let playerTwo = document.querySelector('#player-two');
let currentPlayer = document.querySelector('.current-player')
let currentMove = ' '
currentPlayer.innerHTML = "Player one to start";
let gameResult = document.querySelector('#game-result')
const resultPopup = document.querySelector('.modal-wrapper')
const resultDisplay = document.querySelector('.modal-text')
const closeBtn = document.querySelector('.close')


// Start button
let startGameButton = document.querySelector('.start-game')
startGameButton.addEventListener('click', function(event) {
  alert('Player one to start')
})

// Counter for turns
  //if (maxMoves %2 === 0 && maxMoves >= 0) {
let counter = 0
function gridCells(){
  if (counter == 10) {
    return;
  }
  counter++;
  if (counter >= 10) {
   // alert('it might be a draw')
  }
} 

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

// Alternating turns
let turnTracking = 9
let maxMoves = turnTracking

function moves() {
  if (maxMoves %2 == 0) {
    maxMoves = true
  //  console.log(maxMoves)
    backgroundChangeOne()
    currentPlayer.textContent = "It's your turn Player 1"
  } else if (maxMoves %2 != 0) {
    maxMoves = false
    //console.log(maxMoves)
    backgroundChangeTwo()
    currentPlayer.textContent = "It's your turn Player 2";
  } else if (maxMoves > 9) {
    maxMoves = null
    console.log(maxMoves)
    alert('game over!')
    //return
  }
    //else if (event.target.textContent === 'X' || event.target.textContent === '0') {
    //return
 //}
}

// turn taking event listeners
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



// Refresh button - clears all boxes

const refreshButton = document.querySelector('#new-game')
refreshButton.addEventListener('click', function() {
  for (var i = 1;i <= 9;i++) {
    var cellID = "cell-" + i; 
    document.getElementById(cellID).textContent = "";
    document.getElementById(cellID).style.backgroundColor = "";
  }
})


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
   // alert("Crosses won!")
  } else if (firstCell.textContent === "O" && secondCell.textContent === "O" && thirdCell.textContent === "O") {
    gameResult.textContent = "Noughts won!"
    resultPopup.classList.add('visible')
    resultDisplay.innerHTML ="Noughts won!"
    //alert("Noughts won!")
  }

//secondRowWin
  else if (fourthCell.textContent === "X" && fifthCell.textContent === "X" && sixthCell.textContent === "X") {
  gameResult.textContent = "Crosses won!"
    alert("Crosses won!")
  } else if (fourthCell.textContent === "O" && fifthCell.textContent === "O" && sixthCell.textContent === "O") {
  gameResult.textContent = "Noughts won!"
    alert("Noughts won!")
  }


//thirdRowWin
  else if (seventhCell.textContent === "X" && eigthCell.textContent === "X" && ninthCell.textContent === "X") {
  gameResult.textContent = "Crosses won!"
    alert("Crosses won!")
  } else if (seventhCell.textContent === "O" && eigthCell.textContent === "O" && ninthCell.textContent === "O") {
  gameResult.textContent = "Noughts won!"
    alert("Noughts won!")
  } 

// RESULTS COLUMN FUNCTIONS  

//firstColumnWin
  else if (firstCell.textContent === "X" && fourthCell.textContent === "X" && seventhCell.textContent === "X") {
   alert("Crosses won!")
  } else if (firstCell.textContent === "O" && fourthCell.textContent === "O" && seventhCell.textContent === "O") {
    alert("Noughts won!")
  }

//secondColumnWin
  else if (secondCell.textContent === "X" && fifthCell.textContent === "X" && eigthCell.textContent === "X") {
   alert("Crosses won!")
  } else if (secondCell.textContent === "O" && fifthCell.textContent === "O" && eigthCell.textContent === "O") {
    alert("Noughts won!")
  }

/// thirdColumnWin 
  else if (thirdCell.textContent === "X" && sixthCell.textContent === "X" && ninthCell.textContent === "X") {
    alert("Crosses won!")
  } else if (thirdCell.textContent === "O" && sixthCell.textContent === "O" && ninthCell.textContent === "O") {
    alert("Noughts won!")
  }

// firstDiganolWin  

  else if (firstCell.textContent === "X" && fifthCell.textContent === "X" && ninthCell.textContent === "X") {
    alert("Crosses won!")
  } else if (firstCell.textContent === "O" && fifthCell.textContent === "O" && ninthCell.textContent === "O") {
  alert("Noughts won!")
  } 

// second DiganolWin  
  else if (thirdCell.textContent === "X" && fifthCell.textContent === "X" && seventhCell.textContent === "X") {
    alert("Crosses won!")
  } else if (thirdCell.textContent === "O" && fifthCell.textContent === "O" && seventhCell.textContent === "O") {
   alert("Noughts won!")
  } 
}


const closePopup = () => {
  resultPopup.classList.remove('visible')
}

closeBtn.addEventListener('click', closePopup)

//function cellFilled(){
//if (cell1.textContent === 'X' || cell1.textContent === '0') {
 // cell1.removeEventListener('click', moves)/
//}
//if (cell2.textContent === 'X' || cell1.textContent === '0') {
  //cell2.removeEventListener('click', moves)
//}
//}
  

//let completedGrid = document.querySelectorAll('.box')
//completedGrid.textContent = " "
//function gameFull() {
 // if (cell1.textContent == "X" || "O"){
   // console.log(cell1.textContent, cell2.textContent)
 // }
//}

//const completedGrid = document.querySelectorAll('.box');
//if (completedGrid.textContent === "X" && "0") {
//completedGrid[0].removeEventListener
//}



// All boxes into a nodelist
//const boxes = document.querySelectorAll('.box');

////var boxesArr = Array.from(boxes);
////for (let i = 0; i < Array.from; i++) {
 // console.log(boxesArr)
//} 



// variable for each cell - this isn't doing anything

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