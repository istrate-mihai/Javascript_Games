let playerAirplane = document.querySelector("#playerAirplane");
let gameArea = document.querySelector("#gameArea");
gameArea.style.width = "800px";
gameArea.style.height = "600px";

let moveBy = 5;

playerAirplane.style.position = "relative";
playerAirplane.style.left = 500;
playerAirplane.style.top = 500;

let enemyAirplanes = [];
let shotsFired = [];

let notShown = true;

var score = 0;
let scoreDisplay = document.querySelector("#score");

let menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  if (notShown) {
    document.querySelector("#instructions").style.display = "block";
    document.querySelector("#menu").innerText = "Hide instructions";
    notShown = false;
  } else {
    document.querySelector("#menu").innerText = "Show instructions";
    document.querySelector("#instructions").style.display = "none";
    notShown = true;
  }
});

function shoot() {
  var blast = document.createElement("div");
  blast.style.top = "-5px";
  blast.style.left = "14px";
  blast.style.width = "14px";
  blast.style.height = "14px";
  blast.setAttribute("id", "blast");
  playerAirplane.appendChild(blast);
  shotsFired.push();
  let moveShot = setInterval(function () {
    blast.style.top = parseInt(blast.style.top) - 10;

    for (let i = 0; i < enemyAirplanes.length; i++) {
      if (
        parseInt(enemyAirplanes[i].style.left) - 14 <=
          parseInt(playerAirplane.style.left) &&
        parseInt(playerAirplane.style.left) <=
          parseInt(enemyAirplanes[i].style.left) + 14
      ) {
        enemyAirplanes[i].style.backgroundImage = 'url("images/exploded.gif")';
        score++;
        scoreDisplay.innerHTML = score + " $";
      }
    }
  }, 10);

  setTimeout(function () {
    playerAirplane.removeChild(blast);
    shotsFired.pop();
    clearTimeout(moveShot);
  }, 800);
}

function generateEnemyAirplane() {
  var enemyAirplane = document.createElement("div");
  enemyAirplane.style.top = "0px";
  enemyAirplane.style.left = Math.floor(Math.random() * 700 + 50);
  enemyAirplane.style.width = "34px";
  enemyAirplane.style.height = "34px";
  enemyAirplane.setAttribute("class", "enemyAirplane");
  gameArea.appendChild(enemyAirplane);
  enemyAirplanes.push(enemyAirplane);
}

let enemyAirplaneGenerator = setInterval(generateEnemyAirplane, 2000);
let enemyAirplanesMove = setInterval(function () {
  for (let i = 0; i < enemyAirplanes.length; i++) {
    if (parseInt(enemyAirplanes[i].style.top) === 600) {
      gameArea.removeChild(enemyAirplanes[i]);
    }

    if (
      parseInt(playerAirplane.style.top) <
        parseInt(enemyAirplanes[i].style.top + enemyAirplanes[i].style.height) +
          24 &&
      parseInt(playerAirplane.style.top + playerAirplane.style.height) >
        parseInt(enemyAirplanes[i].style.top) - 28 &&
      parseInt(playerAirplane.style.left) <
        parseInt(enemyAirplanes[i].style.left + enemyAirplanes[i].style.width) +
          22 &&
      parseInt(playerAirplane.style.left + playerAirplane.style.width) >
        parseInt(enemyAirplanes[i].style.left) - 31
    ) {
      alert("You've been hit GAME OVER");
      clearInterval(enemyAirplaneGenerator);
      clearInterval(enemyAirplanesMove);
      document.removeEventListener("keydown", moveAirplane);
    }

    enemyAirplanes[i].style.top = parseInt(enemyAirplanes[i].style.top) + 4;
  }
}, 100);

function moveAirplane(event) {
  var pressedKey = event.key;

  switch (pressedKey) {
    case "ArrowLeft":
      if (parseInt(playerAirplane.style.left) === 0) {
        playerAirplane.style.left = parseInt(gameArea.style.left);
      } else if (parseInt(playerAirplane.style.left) !== 0) {
        playerAirplane.style.left =
          parseInt(playerAirplane.style.left) - moveBy;
      }

      break;

    case "ArrowRight":
      if (
        parseInt(playerAirplane.style.left) ===
        parseInt(gameArea.style.left + gameArea.style.width) - 40
      ) {
        playerAirplane.style.left =
          parseInt(gameArea.style.left + gameArea.style.width) - 40;
      } else if (
        parseInt(playerAirplane.style.left) !==
        parseInt(gameArea.style.left + gameArea.style.width)
      ) {
        playerAirplane.style.left =
          parseInt(playerAirplane.style.left) + moveBy;
      }

      break;

    case "ArrowUp":
      if (parseInt(playerAirplane.style.top) === 0) {
        playerAirplane.style.top = parseInt(gameArea.style.top);
      } else if (parseInt(playerAirplane.style.top) !== 0) {
        playerAirplane.style.top = parseInt(playerAirplane.style.top) - 10;
      }

      break;

    case "ArrowDown":
      if (
        parseInt(playerAirplane.style.top) ===
        parseInt(gameArea.style.top + gameArea.style.height) - 40
      ) {
        playerAirplane.style.top =
          parseInt(gameArea.style.top + gameArea.style.height) - 40;
      } else if (
        parseInt(playerAirplane.style.top) !==
        parseInt(gameArea.style.top + gameArea.style.height)
      ) {
        playerAirplane.style.top = parseInt(playerAirplane.style.top) + moveBy;
      }
      break;

    case " ":
      shoot();
      break;
  }
}

document.addEventListener("keydown", moveAirplane);
