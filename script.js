// Creating two container for storing the score of the user.
let userScore = 0;
let computerScore = 0;

// computer choice generating
const computerChoice = () => {
  let options = ["Rock", "Paper", "Scissor"];
  let randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}; 
// Function for DrawGame
const drawGame = () => {
  console.log("Game is Draw");
  message.innerText = "Game is Draw";
  message.style.backgroundColor = "gray";
};

// Creating a function for showing the winner of the game.
const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    console.log("You Win the Game");
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win! ${userchoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    console.log("Computer Wins the Game");
    computerScore++;
    computerScorePara.innerText = computerScore;
    message.innerText = `You Lose! ${compChoice} beats ${userchoice}`;
    message.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice is", userchoice);
  const compChoice = computerChoice();
  console.log("computer choice is", compChoice);

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "Rock" && compChoice === "Paper") {
      userWin = false;
    }
    else if (userchoice === "Paper" && compChoice === "Scissor") {
      userWin = false;
    }
    else if (userchoice === "Scissor" && compChoice === "Rock") {
      userWin = false;
    }
    else if (userchoice === compChoice) {
      drawGame();
      return;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

// Accessing the user score span for showing the score of the user.
const userScorePara = document.querySelector("#you");

// Accessing the computer score span for showing the score of the computer.
const computerScorePara = document.querySelector("#computer");

// Accessing the message div for showing the result of the game.
const message = document.querySelector("#message");

// Accessing all the choices for making the score.
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  // Accessing Id

  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
