/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var myBoard = new Board({n: n});
  var solution = undefined;


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  //var rows = board.rows();
  var subroutine = function(row, myBoard, n) {
  //base condition
    if (row === n) {
      solutionCount++;
      return;
    }

  //if there's more rows left
    for (var i = 0; i < n; i++) {
      myBoard.togglePiece(row, i);
      if (!myBoard.hasAnyRooksConflicts()) {
        subroutine(row + 1, myBoard, n);
      }
      myBoard.togglePiece(row, i);
    }
  }

  subroutine(0, board, n);
 // console.log('solutionCount: ' + solutionCount);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};




 // //console.log(board)
 //  //console.log(myBoard.rows())
 //  var solution = myBoard.rows();
 //  for (var i = 0; i < solution.length; i++) {
 //    solution[i][i] = 1;
 //  }






  // var solutionCount = 0;
  // var pCount = 0;  //(piece ount)
  // var tCount = 0; // travel count

  // var setPiece = function(row, col){
  //   rows[row][col] = 1;
  // }

  // var resetPiece = function(row, col){
  //   rows[row][col] = 0;
  // }

  // var testConflict = function(row, col) {
  //   return this.hasRowConflictAt(row) && this.hasColConflictAt(col) && this.hasAnyRowConflicts() && this.hasAnyColConflicts();
  // }

  // var setPieceFunc = function ( _row, _col){     //keep set Pieces that has no Conflicts until _row reaches n
  //   //if countStep < n
  //     setPiece( _row, _col);
  //     if (testConflict( _row, _col)) {
  //       resetPiece( _row, _col);
  //     } else {
  //        _col =_col + 1;      //go to the next col
  //       //
  //       // if(_col === n){      //if col index out of bundry, reset to 0
  //       //   _col = 0;
  //       //   maxTCounteDisabled = false;  // control if count horizontal shift of check piece
  //       // }

  //       _row =_row + 1;      //go to the next row
  //        setPieceFunc( _row, _col);
  //     }
  //   //else
  //   }

  // var main = function(row, col) {
  //   setPiece(row, col);  //R0C0 =1




  //   //  //R1C1 = 1

  //   // //test R1C1






  // //rows[row][col+1]

  // }
  // main(0, 0)