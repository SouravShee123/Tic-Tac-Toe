const gameBoard = (() =>{
    const rows = 3;
    const columns = 3;
    const board = [];

   for(let i = 0; i < rows; i++) {
    board[i] = [];
    for(let j = 0; j < columns; j++){
        board[i].push("")
    }
   }

   //  getBoard() makes a copies the row value so outside cant change the original board array
   const getBoard = () => Array.from(board,row => [...row]); 
   
   const placeMark = (row,column,mark) => {
    //  check 3x3 grid 
    if((row < 0 || row > rows-1) || (column < 0 || column > columns-1)) return false; 
    
    // checks if the box is taken
    // if taken returns false;
    if( board[row][column] !== "" ) return false; 

    
    board[row][column] = mark // place mark(X or O)

    return true; //  if placed returns true
}

// loops through the board and overwrites each cell with ""
const reset = () => {
        for(let i = 0; i < rows ; i++){
            for(let j = 0; j < columns; j++){
                board[i][j] = "";
            }
        }
    }
   
   return {getBoard, placeMark, reset}
})();

const createPlayer = (name,mark) => {
    let score = 0;
    const getScore = () => score; 
    const addPoint = () => score++;

    return {name, mark, getScore, addPoint}
}
