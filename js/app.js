/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let totalRowsAndCols = 200;

/*------------------------ Cached Element References ------------------------*/

const layout = document.getElementById('layout');
const grid = document.getElementsByClassName('grid');
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

for (let i = 0; i < totalRowsAndCols; i++) {
  const cell = document.createElement('div');
  cell.textContent = i;
  layout.appendChild(cell);
}
