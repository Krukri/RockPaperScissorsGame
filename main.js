const HumanPlayer = document.querySelector("#humanPlayer");
const ComputerPlayer = document.querySelector("#computerPlayer");
const gameResult = document.querySelector("#gameResult");
const choiceBtns = document.querySelectorAll(".btnDesign");

let playerScore = document.querySelector("#yourScore");
let computerScore = document.querySelector("#compScore");

const resetGame = document.querySelector("#resetBTN");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    compterTurn();
    HumanPlayer.textContent = `You: ${player}`;
    ComputerPlayer.textContent = `Computer: ${computer}`;
    gameResult.textContent = checkWinner();
  })
);

function compterTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    return player == "Paper" ? "You Win!" : "You Lose!";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You Win!" : "You Lose!";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You Win!" : "You Lose!";
  }
}

resetGame.addEventListener("click", function () {
  console.log("You have clicked Reset Game! You want to continue?");
  document.querySelector("#yourScore").innerHTML = 0;
  document.querySelector("#compScore").innerHTML = 0;
});

function changeImge(fileName) {
  let img = document.querySelector("#selectedbyHuman");
  img.setAttribute("src", fileName);
  console.log(img);
}
