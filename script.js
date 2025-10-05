let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

let result = '';

let displayResult = document.querySelector('.js-result');
let displayMoves = document.querySelector('.js-moves');

updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }
    return computerMove;
  }

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else {
      result = 'You Win';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose';
    } else {
      result = 'You Win';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') {
      result = 'Tie';
    } else if (computerMove === 'Rock') {
      result = 'You Lose';
    } else {
      result = 'You Win';
    }
  }

  displayResult.textContent = result;
  displayMoves.innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon"><img src="./images/${computerMove}-emoji.png"
      class="move-icon">Computer`;

  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.loses += 1;
  } else {
    score.ties += 1;
  }

  updateScore();
  localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
  let displayScore = document.querySelector('.js-score');
  displayScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  displayResult.innerHTML = 'Let\'s Play!';
  displayMoves.innerHTML = '';
  updateScore();
}
