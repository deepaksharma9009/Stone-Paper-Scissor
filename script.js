let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userSrc = document.querySelector("#user-score");
let compScr = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#reset-button");
let quitBtn = document.querySelector("#quit-button");

const gameDraw = () => {
  message.innerText = "Draw!";
}
const gameWon = () => {
  message.innerText = "You win!";
  userSrc.innerText = userScore;
}
const gameLose = () => {
  message.innerText = "Oops! Better luck next time";
  compScr.innerText = compScore;
} 

const getComputerChoice = () => {
  const options = ["rock","paper","scissors"];
  const randomOpt = Math.floor(Math.random() * 3);
  return options[randomOpt];
}

const playGame = (getUserChoise) => {
  const compChoice = getComputerChoice();
  if(getUserChoise === compChoice) {
    gameDraw();
  }
  else if (getUserChoise === "rock" && compChoice === "scissors" || getUserChoise === "paper" && compChoice === "rock" || getUserChoise === "scissors" && compChoice === "paper") {
    userScore++;
    gameWon();
  }
  else {
    compScore++;
    gameLose();
  }
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const getUserChoise = choice.getAttribute("id");
    playGame(getUserChoise);
  });  
});


const reset = () => {
  compScore = 0;
  userScore = 0;
  compScr.innerText = "0";
  userSrc.innerText = "0";
  message.innerText = "Play Your Move!";
}
const quitGame = () => {
  window.close();
}
resetBtn.addEventListener("click",reset)
quitBtn.addEventListener("click",quitGame);

