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

let board = [];
let storage = []
let randomTetrisPiece, arrOfDivs, piece, test;
/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.getElementById('game-container');
const randomPiece = document.getElementsByClassName('cells');

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

randomTetrisPiece = randomPieceMaker();
boardMaker();
// render();
// const repeater = setInterval(render, 1000);
// creates the board layout for tetris
function boardMaker() {
  for (let i = 0; i < 200; i++) {
    const cells = document.createElement('div');
    cells.id = i;
    cells.classList.add('cells')
    board.push(cells.id)
    gameBoard.appendChild(cells);
  }
  // render();
}

function repeater() {
  setInterval(render, 1000);
}

// calling function over and over again
function render() {
  arrOfDivs = Array.from(randomPiece);
  const newPieces = [];
  // gives coords of tetris piece
  console.log(randomTetrisPiece)
  for (let i = 0; i < randomTetrisPiece.length; i++) {
    let pieces = randomTetrisPiece[i] + 10;
    arrOfDivs[randomTetrisPiece[i]].classList.remove('blue')
    randomTetrisPiece[i] += 10;
    newPieces.push(pieces);
    // arrOfDivs[randomTetrisPiece[i]].classList.add('blue')
  }

  console.log(newPieces)

  for (let i = 0; i < newPieces.length; i++) {
    // arrOfDivs[newPieces[i]].classList.remove('blue')
    // let test = newPieces[i] + 10;
    arrOfDivs[newPieces[i]].classList.add('blue')
    if (newPieces[i] >= 190 && newPieces[i] <= 199) {
      if (arrOfDivs[newPieces[i]].classList.contains('blue')) {
        clearInterval(repeater);
        randomTetrisPiece = randomPieceMaker();
      }
    }
  }
  repeater();
}


// console.log(board)
// render the tetris pieces onto the board

// returns a random tetris piece
function randomPieceMaker() {
  return pieceCoordinates[Math.floor(Math.random() * pieceCoordinates.length)];
}
