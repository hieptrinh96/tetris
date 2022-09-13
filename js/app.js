/*-------------------------------- Constants --------------------------------*/

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

const storageArray = [];
let arrayOfDivs, tetrisPiece, pieces, piece, cells, eachPiece;

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('#game-container');
const grid = document.getElementsByClassName('grid');

/*----------------------------- Event Listeners -----------------------------*/

window.addEventListener('keydown', movePieces)

/*-------------------------------- Functions --------------------------------*/
boardMaker();
tetrisPiece = randomPieceMaker();
// const pieceDropper = setInterval(renderPieces, 300);
renderPieces();
// moveDown();
function boardMaker() {
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('id', i);
    cell.classList.add('grid');
    board.appendChild(cell);
  }
  arrayOfDivs = Array.from(grid);
}


// function moveDown() {
// condition to test if piece is at bottom
//   if (atBottom) {
// code to cease movement
// code to test for win or loss or add new piece
//   } else if (!atBottom) {
// code to move piece down one space
//     setTimeout(() => moveDown(), 1000);
//   }
// }

// function to move pieces down 
function moveDown() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    piece = arrayOfDivs[tetrisPiece[i] += 10];
    piece.textContent = 'o';
  }
}

// function to check for blockers
function blockChecker(tetrisPiece) {
  let wholePiece = moveDown();
  console.log(wholePiece)
}

console.log(blockChecker(tetrisPiece))


function renderPieces() {
  const newPieces = [];
  for (let i = 0; i < tetrisPiece.length; i++) {
    newPieces.push(tetrisPiece[i] += 10);
    arrayOfDivs[tetrisPiece[i]].textContent = '';
  }
  // if encounters a piece, (blocker checker fucntion), if there is a blocker
  // push intop storage arr

  for (let i = 0; i < newPieces.length; i++) {
    newPieces[i] += 10;
    piece = arrayOfDivs[newPieces[i]];
    piece.textContent = 'o'
    console.log('before', newPieces[i])

    console.log('after', storageArray)
    // goal of these conditions is to stop and not overwrite existing pieces

    // first, set condition so the piece will actually stop at the end
    // checks if tetris piece reaches an index of 190 and if that square contains an "o";
    if (newPieces[i] >= 190 || storageArray.includes(newPieces[i] + 10)) {
      // check if there is already another piece at the bottom row
      // check to see if piece at bottom is there, so we don't overwite it
      // how to stop the piece at the end, then compare it?

      // keep things, organize, don't repeat data
      // green = storage array
      // pink = newPieces[i], dropping down

      // if green, push into array, else do nothing

      storageArray.push(newPieces[i]);
      // clearInterval(pieceDropper);
      tetrisPiece = randomPieceMaker();
    }
  }
}

function pieceGenerator() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    piece = arrayOfDivs[tetrisPiece[i]];
  }
}

function pieceClearer() {
  for (let i = 0; i < tetrisPiece.length; i++) {
    piece = arrayOfDivs[tetrisPiece[i]].textContent = '';
  }
}
// split up arrows 
function movePieces(evt) {
  pieceClearer();
  let cell;
  for (let i = 0; i < tetrisPiece.length; i++) {
    if (tetrisPiece[i] >= 190) return;
    if (evt.code === 'ArrowLeft') {
      cell = tetrisPiece[i] -= 1;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'o';
    }
    if (evt.code === 'ArrowRight') {
      cell = tetrisPiece[i] += 1;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'o';
    }
    if (evt.code === 'ArrowDown') {
      cell = tetrisPiece[i] += 10;
      pieces = arrayOfDivs[cell];
      pieces.textContent = 'o';
      if (cell >= 190) clearInterval(pieceDropper);
    }
  }
}

function randomPieceMaker() {
  return pieceCoordinates[Math.floor(Math.random() * pieceCoordinates.length)]
}

// // create the grid layout
// // create the tetris pieces with an array of coordinates
// // create function to randomly select a tetris piece from the array
// // figure out how to use arrow keys to control the pieces
// figure out how to use div id's to drop the tetris pieces down 
// probably with setInterval - working at 50%


// depending on the block type, change it to a specific color
// once I hit the button to play, add eventlistner to invoke function
// // Creates the grid layout along with individual cells 
// // call function in init to display tetris piece
// condition here to check if they reach the last row, clear the interval
// const newPiece = arrayOfDivs[tetrisPiece[i] += 10];
// newPiece.textContent = 'o';
// const oldPiece = arrayOfDivs[tetrisPiece[i] - 10];
// if (newPiece === oldPiece) oldPiece.textContent = '';