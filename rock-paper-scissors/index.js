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
{   if(humanChoice.toLowerCase() === computerChoice.toLowerCase())
    {   return 'It\'s a tie!';
    }
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors' ||
            humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock' ||
            humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')
    {   humanScore++;
        return 'You win this round!';
    }
    else
    {   computerScore++;
        return 'You lose this round!';
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {   const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if(humanScore > computerScore)
    {   console.log('You win the game!');
    }
    else if(humanScore < computerScore)
    {   console.log('You lose the game!');
    }
    else
    {   console.log('It\'s a tie!');
    }
}

playGame();