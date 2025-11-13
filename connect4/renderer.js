const ROWS = 6;
const COLS = 7;
let currentPlayer = 'red';
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(''));

const table = document.getElementById('board');

function createBoard() {
  table.innerHTML = '';
  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement('tr');
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement('td');
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener('click', handleMove);
      if (board[r][c]) cell.classList.add(board[r][c]);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function handleMove(e) {
  const col = parseInt(e.target.dataset.col);

  for (let r = ROWS - 1; r >= 0; r--) {
    if (!board[r][col]) {
      board[r][col] = currentPlayer;
      break;
    }
  }

  createBoard();

  const playerJustMoved = currentPlayer;

  if (checkWin(playerJustMoved)) {
    setTimeout(() => {
      alert(`${playerJustMoved.toUpperCase()} wins!`);
      board = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
      createBoard();
    }, 100);
    return;
  }

  if (board.flat().every(cell => cell)) {
    setTimeout(() => {
      alert("It's a draw!");
      board = Array.from({ length: ROWS }, () => Array(COLS).fill(''));
      createBoard();
    }, 100);
    return;
  }

  currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
}

function checkWin(player) {
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS - 3; c++)
      if (board[r][c] === player && board[r][c+1] === player && board[r][c+2] === player && board[r][c+3] === player) return true;

  for (let c = 0; c < COLS; c++)
    for (let r = 0; r < ROWS - 3; r++)
      if (board[r][c] === player && board[r+1][c] === player && board[r+2][c] === player && board[r+3][c] === player) return true;

  for (let r = 0; r < ROWS - 3; r++)
    for (let c = 0; c < COLS - 3; c++)
      if (board[r][c] === player && board[r+1][c+1] === player && board[r+2][c+2] === player && board[r+3][c+3] === player) return true;

  for (let r = 3; r < ROWS; r++)
    for (let c = 0; c < COLS - 3; c++)
      if (board[r][c] === player && board[r-1][c+1] === player && board[r-2][c+2] === player && board[r-3][c+3] === player) return true;

  return false;
}

createBoard();
