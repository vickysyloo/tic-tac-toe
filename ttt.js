$(document).on('ready page:load', function () {
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  var turn = 0;

  function checkWinner() {
    for(var num in winningCombos){
        if($('.x').hasClass(winningCombos[num][0]) && $('.x').hasClass(winningCombos[num][1]) && $('.x').hasClass(winningCombos[num][2])){
          alert('X wins');
        }
        else if($('.o').hasClass(winningCombos[num][0]) && $('.o').hasClass(winningCombos[num][1]) && $('.o').hasClass(winningCombos[num][2])){
          alert('O wins')
        }
    };
  };

  $('td').on('click', function () {

    if (turn % 2 === 0) {
      $(this).html("X").addClass("x");
    } else {
      $(this).html("O").addClass("o");
    }

    checkWinner();

    $(this).off('click');
    turn++;

  });

});
