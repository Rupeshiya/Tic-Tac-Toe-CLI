var prompt = require('prompt');
var colors = require('colors');
 var board = {
   1: ' ',
   2: ' ',
   3: ' ',
   4: ' ',
   5: ' ',
   6: ' ',
   7: ' ',
   8: ' ',
   9: ' '
 };
 /////////function to print position and marks //////////////
function makeBoard(position,mark){
  board[position] = mark.toUpperCase();
}


////////////function to print to console/////////

function printBoard(){
  console.log(colors.green.bold('\n'+
  '                             '+board[1] + ' | ' + board[2] + ' | '+ board[3] +'\n' +
  '                             '+board[4] + ' | ' + board[5] + ' | '+ board[6] + '\n' +
  '                             '+board[7] + ' | ' + board[8] + ' | '+ board[9] + '\n'
));
}
/////////////////function to check the value//////
function isInt(value){
  var x;
  if(isNaN(value)){
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

////////function to validate//////////////////

function validate(position){
  return (isInt(position) && board[position] === ' ')
}
////win combinations /////////////////

var winCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

//////////////function to check win////////////////////
function checkwin(player){
  for(var i = 0; i < winCombinations.length; i++){
       var mark = 0,count=0;
       for(var j = 0; j < winCombinations[i].length; j++){
         if(board[winCombinations[i][j]] === player){
          mark++;
        }
        if(mark === 3)
        {
          count++;
          if(count === 0)
          {
            console.log(colors.green.bold('Game Tie'));
            return;
          }
          return true;
        }
      }
    }
      return false;
}
 // function checkTie(){
 //   for(var i=0; i< winCombinations[i].lengt;h)
 // }
 function playerTurn(player){
   console.log('Your turn player: ',player);
   prompt.start();
   prompt.get(['position'],function(err,res){
     if(validate(res.position) === true)
     {
       makeBoard(res.position,player);
       printBoard();
       if(checkwin(player)  === true)
       {
         console.log(colors.green.bold(`Winner Winner!! player ${player}`));
         return;
       }
       if(player === 'X')
       {
         playerTurn('O');
       }else {
         playerTurn('X');
       }
     }else {
       console.log(colors.green.bold('incorrect input please try again..'));
       playerTurn(player);
     }
   });
 }
 console.log(colors.green.bold('Game started : \n'+
              '                              1 | 2 | 3 \n'+
              '                              4 | 5 | 6 \n'+
              '                              7 | 8 | 9 \n'));
              playerTurn('X');
