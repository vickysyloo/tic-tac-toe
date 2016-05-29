$(document).on('ready page:load', function () {
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  var turn = 0;
  newGame();

  function checkWinner () {
    // for(var num in winningCombos){
    //     if($('.x').hasClass(winningCombos[num][0]) && $('.x').hasClass(winningCombos[num][1]) && $('.x').hasClass(winningCombos[num][2])){
    //       alert('X wins');
    //       turn = 0;
    //       resetGame();
    //     }
    //     else if($('.o').hasClass(winningCombos[num][0]) && $('.o').hasClass(winningCombos[num][1]) && $('.o').hasClass(winningCombos[num][2])){
    //       alert('O wins')
    //       turn = 0;
    //       resetGame();
    //     }
    // };
  };

  function gameTied () {
      if(turn === 9 && checkWinner() === false){
        alert('No winners! Game tied.');
        resetGame();
      }
  };

  function newGame () {
    $('td').on('click', function () {
      if (turn % 2 === 0) {
        $(this).html("X").addClass("x").css("border-color", "red");
      } else {
        $(this).html("O").addClass("o").css("border-color", "blue");
      };

      $(this).off('click');
      turn++;

      checkWinner ();
    });
  };

  function resetGame () {
      $('td').removeClass("x").html("").css("border-color", "black");
      $('td').removeClass("o").html("").css("border-color", "black");
      newGame ();
  };

});
