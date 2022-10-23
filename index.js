let gameBoard = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, ],
    [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, ],
    [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, ],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
];



function turn(board) {
    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < board[i].length - 1; j++) {
            rules(i, j);
        }
    }

    function rules(row, col) {
        let neighbours = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                let k = i; l = j;
                if (k < 0) { k = board.length - i; }
                if (l < 0) { l = 14 + j; }
                if (k > board.length) { k = i - board.length; }
                if (l >= 14) { l = 13 - j; }
                console.log(i, j, board[i][j])
                if ((board[i][j] === 1) && (i !== row) && (j !== col)) { neighbours++ }
            }
        }
        // Any **live** cell with fewer than two live neighbours dies (referred to as underpopulation).
        if (neighbours < 2 && board[row][col] === 1) {
            console.log('rule 1', board)
            board[row][col] = 0;
        // Any **live** cell with more than three live neighbours dies (referred to as overpopulation).
        } else if (neighbours > 3 && board[row][col] === 1) {
            console.log('rule 2')
            board[row][col] = 0;
        // Any **dead** cell with exactly three live neighbours comes to life.
        } else if (neighbours === 3 && board[row][col] === 0) {
            console.log('rule 3')
            board[row][col] = 1;
        }
    }

    gameBoard = board
    console.log(board);
    for (let i = 0; i < gameBoard.length; i++) {
        $( "#board-row-" + i ).html( "<div>" + gameBoard[i].join(' ') + "<div>" + "</br>" );
    }

}



$(function() {
    
    $("#button").on("click", function(){
        turn(gameBoard);
      });
    for (let i = 0; i < gameBoard.length; i++) {
        $( "#board-row-" + i ).html( "<div>" + gameBoard[i].join(' ') + "<div>" + "</br>" );
    }
  });


