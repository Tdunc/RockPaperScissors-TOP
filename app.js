let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const div_choices = document.querySelector('.choices');
const Winner = document.createElement('h1');
const resetGame = document.getElementById('reset');


//Calculates random move
function getcomputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//converts pick to full word for readability
function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(computerChoice)}${smallCompWord}, you win!`;
  decision();
  // creates winner header, adds play again button
  // if (userScore == 5) {
  //   div_choices.style = "display: none";
  //   Winner.textContent = 'YOU WON!!';
  //   Winner.style = "color: green";
  //   result_p.appendChild(Winner);
  //   resetGame.textContent = "Play Again";
  //   resetGame.style = "display: block";
  // }

}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} loses to ${convertWord(computerChoice)}${smallCompWord}, you lost!`;
  decision();
  // creates winner header, adds play again button
  // if (computerScore == 5) {
  //   div_choices.style = "display: none";
  //   Winner.textContent = 'YOU LOST!';
  //   Winner.style = "color: red";
  //   result_p.appendChild(Winner);
  //   resetGame.textContent = "Play Again";
  //   resetGame.style = "display: block";
  // }
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} can't beat ${convertWord(computerChoice)}${smallCompWord}, you tied!`;
}

//Switch statement takes the string of both picks and calls the function of the matching string.
function game(userChoice) {
  const computerChoice = getcomputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice); //arguments show user and computer picks
    break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice); //arguments show user and computer picks
    break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice); //arguments show user and computer picks
    break;
  }
}



//function constantly running to listen for pick of the user. (is listening for the click of each id)
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })

}


main();

// For play again button
function refreshPage(){
  window.location.reload();
} 


function decision(){
  if ( userScore == 5) {
    div_choices.style = "display: none";
    Winner.textContent = 'YOU WON!!';
    Winner.style = "color: green";
    result_p.appendChild(Winner);
    resetGame.textContent = "Play Again";
    resetGame.style = "display: block";
    
  } else if ( computerScore == 5){
    div_choices.style = "display: none";
    Winner.textContent = 'YOU LOST!';
    Winner.style = "color: red";
    result_p.appendChild(Winner);
    resetGame.textContent = "Play Again";
    resetGame.style = "display: block";
  }
}

// SPUDINSKE REFACTOR 
// function decision() {
//   if (userScore === 5 || userScore === 5) {
//   if (userScore == 5) {
//   Winner.textContent = "YOU WON!!";
//   Winner.style = "color: green";
//   }
//   if (computerScore == 5) {
//   Winner.textContent = "YOU LOST!";
//   Winner.style = "color: red";
//   }
//   result_p.appendChild(Winner);
//   div_choices.style = "display: none";
//   resetGame.textContent = "Play Again";
//   resetGame.style = "display: block";
//   }
//   }
  