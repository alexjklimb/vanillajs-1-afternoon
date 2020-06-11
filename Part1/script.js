const player = document.getElementById('player')
let board=[]



const play=function(box){
    const turn = document.getElementById(box)
    turn.innerText=player.innerText
    board[box]=player.innerText
    player.innerText==="X"?player.innerText="O" : player.innerText="X"
    console.log(board)

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
        alert(`${board[0]} is the winner`);
        return;
      }
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
        alert(`${board[3]} is the winner`);
        return;
      }
    if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {
        alert(`${board[3]} is the winner`);
        return;
      }
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {
        alert(`${board[0]} is the winner`);
        return;
      }
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
        alert(`${board[1]} is the winner`);
        return;
      }
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {
        alert(`${board[2]} is the winner`);
        return;
      }
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
        alert(`${board[0]} is the winner`);
        return;
      }
    if (board[6] !== undefined && board[6] === board[4] && board[6] === board[2]) {
        alert(`${board[6]} is the winner`);
        return;
      }
    
      let endGame = false;
      for (let i = 0; i < 9; i++) {
        if (i === 9) {
            endGame=true
      }
      if (endGame === true) {
        alert("Cat's game, there is no winner");
      }
    }}