function startGame() {
  const startGameWindow = (document.querySelector(".start-game").style.display =
    "none");
  const body = document.querySelector("body");
  body.classList.remove("lock");

  const winnerDiv = document.querySelector(".winner");
  const gameWin = document.querySelector(".game__win");

  const gameBoardCell = document.querySelectorAll(".game__board-cell");

  const turnX = `<i class="fa-solid fa-xmark icon x-icon"></i>`;
  const turnY = `<i class="fa-solid fa-o icon o-icon"></i>`;

  let currentTurnPlayer = turnX;

  localStorage.setItem("currentTurnPlayer", turnX);

  const gameTurn = document.querySelector(".game__turn");

  gameTurn.innerHTML = `It's ${currentTurnPlayer} turn`;

  const playerX = `<i class="fa-solid fa-xmark" style="color: #61dbfb;"></i>`;
  const playerY = `<i class="fa-solid fa-o" style="color: #68a063;"></i>`;

  gameBoardCell.forEach((cell) => {
    cell.addEventListener("click", function (currentPlayer) {
      if (
        localStorage["currentTurnPlayer"] === turnX &&
        cell.innerHTML === ``
      ) {
        currentPlayer = playerX;

        cell.innerHTML = currentPlayer;

        gameTurn.innerHTML = `It's ${turnY} turn`;

        localStorage["currentTurnPlayer"] = turnY;
      } else if (
        localStorage["currentTurnPlayer"] === turnY &&
        cell.innerHTML === ``
      ) {
        currentPlayer = playerY;

        cell.innerHTML = currentPlayer;

        localStorage["currentTurnPlayer"] = turnX;

        gameTurn.innerHTML = `It's ${turnX} turn`;
      }

      if (
        (gameBoardCell[0].innerHTML === playerX &&
          gameBoardCell[1].innerHTML === playerX &&
          gameBoardCell[2].innerHTML === playerX) ||
        (gameBoardCell[3].innerHTML === playerX &&
          gameBoardCell[4].innerHTML === playerX &&
          gameBoardCell[5].innerHTML === playerX) ||
        (gameBoardCell[6].innerHTML === playerX &&
          gameBoardCell[7].innerHTML === playerX &&
          gameBoardCell[8].innerHTML === playerX) ||
        (gameBoardCell[0].innerHTML === playerX &&
          gameBoardCell[3].innerHTML === playerX &&
          gameBoardCell[6].innerHTML === playerX) ||
        (gameBoardCell[1].innerHTML === playerX &&
          gameBoardCell[4].innerHTML === playerX &&
          gameBoardCell[7].innerHTML === playerX) ||
        (gameBoardCell[2].innerHTML === playerX &&
          gameBoardCell[5].innerHTML === playerX &&
          gameBoardCell[8].innerHTML === playerX) ||
        (gameBoardCell[0].innerHTML === playerX &&
          gameBoardCell[4].innerHTML === playerX &&
          gameBoardCell[8].innerHTML === playerX) ||
        (gameBoardCell[2].innerHTML === playerX &&
          gameBoardCell[4].innerHTML === playerX &&
          gameBoardCell[6].innerHTML === playerX)
      ) {
        winnerDiv.classList.remove("none");
        body.classList.add("win");
        gameWin.innerHTML = `Congrats ${turnX} Winner!`;
      } else if (
        (gameBoardCell[0].innerHTML === playerY &&
          gameBoardCell[1].innerHTML === playerY &&
          gameBoardCell[2].innerHTML === playerY) ||
        (gameBoardCell[3].innerHTML === playerY &&
          gameBoardCell[4].innerHTML === playerY &&
          gameBoardCell[5].innerHTML === playerY) ||
        (gameBoardCell[6].innerHTML === playerY &&
          gameBoardCell[7].innerHTML === playerY &&
          gameBoardCell[8].innerHTML === playerY) ||
        (gameBoardCell[0].innerHTML === playerY &&
          gameBoardCell[3].innerHTML === playerY &&
          gameBoardCell[6].innerHTML === playerY) ||
        (gameBoardCell[1].innerHTML === playerY &&
          gameBoardCell[4].innerHTML === playerY &&
          gameBoardCell[7].innerHTML === playerY) ||
        (gameBoardCell[2].innerHTML === playerY &&
          gameBoardCell[5].innerHTML === playerY &&
          gameBoardCell[8].innerHTML === playerY) ||
        (gameBoardCell[0].innerHTML === playerY &&
          gameBoardCell[4].innerHTML === playerY &&
          gameBoardCell[8].innerHTML === playerY) ||
        (gameBoardCell[2].innerHTML === playerY &&
          gameBoardCell[4].innerHTML === playerY &&
          gameBoardCell[6].innerHTML === playerY)
      ) {
        winnerDiv.classList.remove("none");
        body.classList.add("win");
        gameWin.innerHTML = `Congrats ${turnY} Winner!`;
      } else if (
        gameBoardCell[0].innerHTML &&
        gameBoardCell[1].innerHTML &&
        gameBoardCell[2].innerHTML &&
        gameBoardCell[3].innerHTML &&
        gameBoardCell[4].innerHTML &&
        gameBoardCell[5].innerHTML &&
        gameBoardCell[6].innerHTML &&
        gameBoardCell[7].innerHTML &&
        gameBoardCell[8].innerHTML &&
        !body.classList.contains("win")
      ) {
        winnerDiv.classList.remove("none");
        gameWin.innerHTML = `Draw`;
      }
    });
  });
}

function restartGame() {
  window.location.reload();
}
