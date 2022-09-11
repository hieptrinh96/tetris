/*-------------------------------- Constants --------------------------------*/



// Creates the tetris pieces,
// use coordinates of 
const tetrisPieces = []
const pieceCoordinates = [
  [4, 5, 14, 15], // square block
  [4, 14, 24, 34], // vertical line block
  [4, 5, 15, 16], // z block
  [4, 3, 13, 12], // reverse z block
  [4, 14, 24, 25], // L block
  [4, 14, 24, 23], // reverse L block
  [4, 13, 14, 15], // T block
]

/*---------------------------- Variables (state) ----------------------------*/

let arrayOfDivs, tetrisPiece, eachNum;
let piece = [];

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('#game-container');
const grid = document.getElementsByClassName('grid');

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

// Creates the grid layout along with individual cells 
// call function in init to display tetris piece
// depending on the block type, change it to a specific color
boardMaker();

// once I hit the button to play, add eventlistner to invoke function
tetrisPiece = randomPieceMaker();
// tetrisTester();
function boardMaker() {
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('id', i);
    cell.classList.add('grid');
    board.appendChild(cell);
  }
  arrayOfDivs = Array.from(grid);
}

for (let i = 0; i < arrayOfDivs.length; i++) {
  let cell = arrayOfDivs[i].id;
  for (let j = 0; j < tetrisPiece.length; j++) {
    let num = tetrisPiece[j].toString();
    if (cell === num) cell.textContent = 'x'
  }
}

console.log(piece, eachNum)

// console.log(typeof board)

// console.log(randomPieceMaker())
// re
function randomPieceMaker() {
  return pieceCoordinates[Math.floor(Math.random() * pieceCoordinates.length)]
}


 // // create the grid layout
 // // create the tetris pieces with an array of coordinates
// // create function to randomly select a tetris piece from the array
// figure out how to get the tetris pieces on the board either with the cell number or id
//