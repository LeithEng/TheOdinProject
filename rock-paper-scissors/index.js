function getComputerChoice()
{   const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getHumanChoice()
{   const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors')
    {   return humanChoice;
    }
    else
    {   alert('Invalid choice. Please enter rock, paper, or scissors');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{   const resultDisplay= document.getElementById('round-result');
    const humanScoreDisplay = document.getElementById('human-score');
    const computerScoreDisplay = document.getElementById('computer-score');

     if(humanChoice.toLowerCase() === computerChoice.toLowerCase())
    {   resultDisplay.textContent = `It's a tie! Both chose ${humanChoice}.`;
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors' ||
            humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock' ||
            humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')
    {   humanScore++;
        humanScoreDisplay.textContent = humanScore;
        resultDisplay.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
    else
    {   computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
    checkWinner();
}

function checkWinner() {
    const resultDisplay = document.getElementById('round-result');

    if (humanScore === 5) {
        resultDisplay.textContent = 'Congratulations! You win the game!';
        disableButtons();
    } else if (computerScore === 5) {
        resultDisplay.textContent = 'Game over! The computer wins the game!';
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});