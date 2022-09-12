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

let arrayOfDivs, tetrisPiece, pieces, piece, cells;

// let arrows = new KeyboardEvent();
/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('#game-container');
const grid = document.getElementsByClassName('grid');

/*----------------------------- Event Listeners -----------------------------*/

window.addEventListener('keydown', movePieces)

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

function renderPieces() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    pieces = arrayOfDivs[tetrisPiece[i]];
    pieces.textContent = 'o';
  }
}

function pieceClearer() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    pieces = arrayOfDivs[tetrisPiece[i]].textContent = '';
  }
}

function movePieces(evt) {
  pieceClearer();
  for (let i = 0; i < tetrisPiece.length; i++) {
    if (evt.code === 'ArrowLeft') {
      let cell = tetrisPiece[i] -= 1;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'x';
    }
    if (evt.code === 'ArrowRight') {
      let cell = tetrisPiece[i] += 1;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'x';
    }
    if (evt.code === 'ArrowDown') {
      let cell = tetrisPiece[i] += 10;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'x';
    }
  }
}

function randomPieceMaker() {
  return pieceCoordinates[Math.floor(Math.random() * pieceCoordinates.length)]
}

// figure out how to use div id's to drop the tetris pieces down 
 // // create the grid layout
 // // create the tetris pieces with an array of coordinates
// // create function to randomly select a tetris piece from the array
// figure out how to use arrow keys to control the pieces