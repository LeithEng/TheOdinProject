const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
  
    const getBoard = () => board;
  
    const setCell = (index, marker) => {
      if (board[index] === "") {
        board[index] = marker;
        return true;
      }
      return false;
    };
  
    const resetBoard = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
    return { getBoard, setCell, resetBoard };
  })();
  
  const Player = (name, marker) => {
    return { name, marker };
  };
  
  const GameController = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    let currentPlayer = player1;
    let gameOver = false;
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    const checkWinner = () => {
      const board = Gameboard.getBoard();
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return board.includes("") ? null : "draw";
    };
  
    const playTurn = (index) => {
      if (!gameOver && Gameboard.setCell(index, currentPlayer.marker)) {
        const result = checkWinner();
        if (result) {
          gameOver = true;
          displayController.showResult(result === "draw" ? "It's a draw!" : `${currentPlayer.name} wins!`);
        } else {
          switchPlayer();
          displayController.updateBoard(); 
        }
      }
    };
  
    const restart = () => {
      gameOver = false;
      currentPlayer = player1;
      Gameboard.resetBoard();
      displayController.updateBoard();
      displayController.showResult("");
    };
  
    return { playTurn, restart };
  })();
  
  const displayController = (() => {
    const gameboardDiv = document.getElementById("gameboard");
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.getElementById("controls").prepend(resultDiv);
  
    const renderBoard = () => {
      gameboardDiv.innerHTML = ""; 
  
      Gameboard.getBoard().forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.textContent = cell;
        cellDiv.classList.add("cell");
        if (cell === "X") {
            cellDiv.classList.add("x");
          } else if (cell === "O") {
            cellDiv.classList.add("o");
          }
  
        cellDiv.addEventListener("click", () => {
          GameController.playTurn(index);
        });
  
        gameboardDiv.appendChild(cellDiv);
      });
    };
  
    const updateBoard = () => renderBoard();
  
    const showResult = (message) => {
      resultDiv.textContent = message;
    };
  
    return { updateBoard, showResult };
  })();
  
  document.getElementById("restart").addEventListener("click", () => GameController.restart());
  

  displayController.updateBoard();
  