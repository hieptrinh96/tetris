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

let arrayOfDivs, tetrisPiece, pieces, piece;

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('#game-container');
const grid = document.getElementsByClassName('grid');

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// depending on the block type, change it to a specific color
// once I hit the button to play, add eventlistner to invoke function
// find a way to target the 
// // Creates the grid layout along with individual cells 
// // call function in init to display tetris piece
boardMaker();
tetrisPiece = randomPieceMaker();
renderPieces();
function boardMaker() {
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('id', i);
    cell.classList.add('grid');
    board.appendChild(cell);
  }
  arrayOfDivs = Array.from(grid);
}
// function render() {
//   for (let i = 0; i < arrayOfDivs.length; i++) {
//     let cell = arrayOfDivs[i];
//     let cellId = arrayOfDivs[i].id;
//     for (let j = 0; j < tetrisPiece.length; j++) {
//       let num = tetrisPiece[j].toString();
//       if (cellId === num) {
//         cell.textContent = 'x'
//       }
//     }
//   }
// }
function renderPieces() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    pieces = arrayOfDivs[tetrisPiece[i]];
    pieces.textContent = 'o';
  }
  movePieces()
}
function pieceClearer() {

}
function movePieces() {
  let movingDown = tetrisPiece.map(cell => cell += 10);
  let movingLeft = tetrisPiece.map(cell => cell -= 1);

  console.log('tetris piece = ', tetrisPiece, 'moving down =', movingDown, 'moving left =', movingLeft);
}
function randomPieceMaker() {
  return pieceCoordinates[Math.floor(Math.random() * pieceCoordinates.length)]
}

// figure out how to use div id's to drop the tetris pieces down 
 // // create the grid layout
 // // create the tetris pieces with an array of coordinates
// // create function to randomly select a tetris piece from the array
// figure out how to get the tetris pieces on the board either with the cell number or id
//