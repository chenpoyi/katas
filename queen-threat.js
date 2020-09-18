const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
};

const queenThreat = function(board) {
  let queens = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queens.push([i,j]);
        
      }
    }
  }
  let first = queens[0];
  let second = queens[1];
  if ((first[0] === second[0]) || (first[1] === second[1])) {
    return true;
  } else if (Math.abs(first[0] - second[0]) === Math.abs(first[1] - second[1])) {
    return true;
  }
  return false;
};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/