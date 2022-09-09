/*-------------------------------- Constants --------------------------------*/
// Use to create the grid layout of the tetris board
const totalRowsAndCols = 200;

// Creates the tetris pieces,
// use coordinates of 
const tetrisPieces = []
const pieceCoordinates = [
  [4, 5, 14, 15], // square block
  [4, 5, 6, 7], // horizontal line block
  [4, 14, 24, 34], // vertical line block
  [4, 5, 15, 16]

]

/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/

const grid = document.querySelector('.grid')
const layout = document.getElementsByClassName('grid');

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

// Creates the grid layout along with individual cells 
boardMaker();
function boardMaker() {
  for (let i = 0; i < totalRowsAndCols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid');
    cell.setAttribute('id', `cell ${i}`);
    grid.appendChild(cell)
  }
}

// create the grid layout
// create the tetris pieces with an array of coordinates
// create function to randomly select a tetris piece from the array
  // - will probably need to include pieces of different positions
// figure out how to get the tetris pieces on the board either with the cell number or id
//