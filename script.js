
const score = {
  wins: 0,
  loses: 0,
  ties: 0
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let dislpay = document.getElementById("display-result");
  let result = '';

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      console.log('Rock');
      computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      console.log('Papper');
      computerMove = 'Papper';
    } if (randomNumber >= 2 / 3 && randomNumber < 1) {
      console.log('Scissors');
      computerMove = 'Scissors';
    }

    return computerMove;
  }

  function playerRock() {
    if (computerMove === 'Rock') {
      result = 'Tie'
    } else if (computerMove === 'Papper') {
      result = 'You Lose'
    } else {
      result = 'You Win'
    }
    dislpay.textContent = `You picked rock. computer picked ${computerMove} . ${result} `;
  }


  function playerPapper() {
    if (computerMove === 'Papper') {
      result = 'Tie'
    } else if (computerMove === 'Scissors') {
      result = 'You Lose'
    } else {
      result = 'You Win'
    }
    dislpay.textContent = `You picked papper. computer picked ${computerMove} . ${result} `;
  }

  function playerScissors() {
    if (computerMove === 'Scissors') {
      result = 'Tie'
    } else if (computerMove === 'Rock') {
      result = 'You Lose'
    } else {
      result = 'You Win'
    }
    dislpay.textContent = `You picked scissors. computer picked ${computerMove} . ${result} `;
  }

  if (playerMove === 'Rock') {
    playerRock();
  } else if (playerMove === 'Papper') {
    playerPapper();
  } else if (playerMove === 'Scissors') {
    playerScissors();
  }
}



function resetGame() {
  computerMove = ``;
  result = ``;
  dislpay.textContent = `Let Play Game`
  computerChose();
}