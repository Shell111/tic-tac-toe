console.log('hello')

let playerOne = null;
let playerTwo = null;

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
  event.target.style.backgroundColor = 'yellow'
})
}


