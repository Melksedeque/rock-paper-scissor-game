/**
 * CLEAR SCORE
 */
let score = parseInt(localStorage.getItem("score")) || 0;

function clearScore() {
  score = 0;
  localStorage.setItem("score", score);
  const scoreText = document.querySelector("#score");
  scoreText.textContent = score;
}

const clearScoreButton = document.querySelector("#clearScore");
clearScoreButton.addEventListener("click", clearScore);

/**
 * UPDATE SCORE
 */
function updateScore() {
  document.getElementById('score').textContent = score;
}

/**
 * CPU PLAY
 */
function cpuPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}