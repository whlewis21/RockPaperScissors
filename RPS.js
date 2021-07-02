function computerPlay () { 
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "How did we get here?";
      break;
  }
}

function playRound(playerSelection, computerSelection) {

  let playerSelectionInt;
  let computerSelectionInt;

  if(playerSelection == "rock"){
    playerSelectionInt = 0;
  }else if(playerSelection == "paper"){
    playerSelectionInt = 1;
  }else {
    playerSelectionInt = 2;
  }

  if(computerSelection == "rock"){
    computerSelectionInt = 0;
  }else if(computerSelection == "paper"){
    computerSelectionInt = 1;
  }else {
    computerSelectionInt = 2;
  }

  let win_array = [[0, 2, 1],
                   [1, 0, 2],
                   [2, 1, 0]];
  let result = win_array[playerSelectionInt][computerSelectionInt];

  if(result == 0){
    return `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }else if(result == 1){
    return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }else if(result == 2){
    return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }

}

function game(){
  let playerSelection;
  let computerSelection;

  for(let i = 0; i < 5; i++){
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
