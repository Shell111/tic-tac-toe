console.log('hello')

let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two');
//et blue = playerOne
//let green = playerTwo
//if ('.box' === playerOne.click)
if (playerOne === document.querySelectorAll('.box')) {
  alert('next turn')
}
// if (blue === clicked)

let boxes = document.querySelectorAll('#game-grid .box')
console.log(boxes)

let topRow = ['#cell 1', '#cell 2', '#cell 3']
console.log(topRow);
 
let secondRow = ['#cell 4', '#cell 5', '#cell 6']
console.log(secondRow);

let thirdRow = ['#cell 7', '#cell 8', '#cell 9']
console.log(thirdRow)



for (let i = 0; i < boxes.length; i++) {
  let clickedBox = boxes[i]  
  clickedBox.addEventListener('click', function(event) {
  event.target.innerText = "X";

  if (clickedBox === 'X' ){
    alert('next turn')
  }
})
}

startGame = Math.random(Math.floor()* 2)

startGameButton = document.querySelector('.start-game')
startGameButton.addEventListener('click', function(event) {
  alert('player one to start')
})



