let score = parseInt(localStorage.getItem("score")) || 0;

function clearScore() {
  score = 0;
  localStorage.setItem("score", score);
  const scoreText = document.querySelector("#score");
  scoreText.textContent = score;
}

const clearScoreButton = document.querySelector("#clearScore");
clearScoreButton.addEventListener("click", clearScore);

