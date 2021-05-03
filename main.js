// In set up / planning mode

// Player elements
let playerOne = document.querySelector('#player-one');
let playerTwo = document.querySelector('#player-two');
let currentPlayer = document.querySelector('.current-player')
let currentMove = ''
currentPlayer.innerHTML = "Your move now: " + currentMove;

// Start button
let startGameButton = document.querySelector('.start-game')
startGameButton.addEventListener('click', function(event) {
  alert('player one to start')
})

// Game cells as empty array, to be allocated as turns taken
let gameGrid = ['','','','','','','','','',]


// All winning combinations in arrays
// All combos in nested array
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

// Each combo into separate array - may not be needed
const firstRow = ['#cell-1', '#cell-2', '#cell-3']

const secondRow = ['#cell-4', '#cell-5', '#cell-6']

const thirdRow = ['#cell-7', '#cell-8', '#cell-9']

const firstColumn = ['#cell-1', '#cell-4', '#cell-7']

const secondColumn = ['#cell-2', '#cell-5', '#cell-8']

const thirdColumn = ['#cell-3', '#cell-6', '#cell-9']

const firstDiagonal = ['#cell-1', '#cell-5', '#cell-9']

const secondDiagonal = ['#cell-3', '#cell-5', '#cell-7']

// All boxes into a nodelist
const boxes = document.querySelectorAll('.box');

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

// Convert boxes from NodeList to an array
var boxesArr = Array.from(boxes);

// loop to target each box and change innerText or bg-color
for (let i = 0; i < boxesArr.length; i++) {
  let boxClicked = boxesArr[i];  
  boxClicked.addEventListener('click', function(event){
    boxClicked.style.backgroundColor = "lightcyan";
    if (boxClicked.style.backgroundColor === "lightcyan"){
      alert('next turn')
    }
  })
}



// Another loop to target each box.inner text
//for (let i = 0; i < boxesArr.length; i++) {
  //let clickedBox = boxesArr[i]  
  //clickedBox.addEventListener('click', function(event) {
  //event.target.innerText = "X";

  //if (clickedBox.innerText === 'X' ){
    //alert('next turn')
  //}









