let choice_made = "";
let confirm_button;
let squares = document.getElementsByClassName("square");
let positionsOccupied = [];
let computerPositionsOccupied = [];

function won() {
  setTimeout(function () {
    document.getElementsByTagName("h3")[0].innerHTML = "You've won !!!";
    document.getElementsByTagName("h3")[0].style.color = "blue";
    document.getElementsByTagName("h3")[0].style.fontSize = "40px";
    document.getElementById("gameArea").style.display = "none";
  }, 1000);
}

function winComputer() {
  setTimeout(function () {
    if (choice_made === "cross") {
      document.getElementsByTagName("h3")[0].innerHTML =
        "You've lost, computer has O!!!";
    } else if (choice_made === "circle") {
      document.getElementsByTagName("h3")[0].innerHTML =
        "You've lost, computer has X!!!";
    }

    document.getElementsByTagName("h3")[0].style.color = "red";
    document.getElementsByTagName("h3")[0].style.fontSize = "40px";
    document.getElementById("gameArea").style.display = "none";
  }, 1000);
}

function computerWin() {
  if (
    computerPositionsOccupied.indexOf(0) !== -1 &&
    computerPositionsOccupied.indexOf(1) !== -1 &&
    computerPositionsOccupied.indexOf(2) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(3) !== -1 &&
    computerPositionsOccupied.indexOf(4) !== -1 &&
    computerPositionsOccupied.indexOf(5) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(6) !== -1 &&
    computerPositionsOccupied.indexOf(7) !== -1 &&
    computerPositionsOccupied.indexOf(8) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(0) !== -1 &&
    computerPositionsOccupied.indexOf(3) !== -1 &&
    computerPositionsOccupied.indexOf(6) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(1) !== -1 &&
    computerPositionsOccupied.indexOf(4) !== -1 &&
    computerPositionsOccupied.indexOf(7) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(2) !== -1 &&
    computerPositionsOccupied.indexOf(5) !== -1 &&
    computerPositionsOccupied.indexOf(8) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(0) !== -1 &&
    computerPositionsOccupied.indexOf(4) !== -1 &&
    computerPositionsOccupied.indexOf(8) !== -1
  ) {
    winComputer();
  } else if (
    computerPositionsOccupied.indexOf(2) !== -1 &&
    computerPositionsOccupied.indexOf(4) !== -1 &&
    computerPositionsOccupied.indexOf(6) !== -1
  ) {
    winComputer();
  }
}

function winConditions() {
  computerWin();

  if (
    positionsOccupied.indexOf(0) !== -1 &&
    positionsOccupied.indexOf(1) !== -1 &&
    positionsOccupied.indexOf(2) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(3) !== -1 &&
    positionsOccupied.indexOf(4) !== -1 &&
    positionsOccupied.indexOf(5) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(6) !== -1 &&
    positionsOccupied.indexOf(7) !== -1 &&
    positionsOccupied.indexOf(8) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(0) !== -1 &&
    positionsOccupied.indexOf(3) !== -1 &&
    positionsOccupied.indexOf(6) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(1) !== -1 &&
    positionsOccupied.indexOf(4) !== -1 &&
    positionsOccupied.indexOf(7) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(2) !== -1 &&
    positionsOccupied.indexOf(5) !== -1 &&
    positionsOccupied.indexOf(8) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(0) !== -1 &&
    positionsOccupied.indexOf(4) !== -1 &&
    positionsOccupied.indexOf(8) !== -1
  ) {
    won();
  } else if (
    positionsOccupied.indexOf(2) !== -1 &&
    positionsOccupied.indexOf(4) !== -1 &&
    positionsOccupied.indexOf(6) !== -1
  ) {
    won();
  }
}

function choice(choice) {
  confirm_button = document.getElementById("confirm_button").style.display =
    "inline";

  choice_made = choice.value;
}

function start_game(button) {
  document.getElementsByTagName("h3")[0].style.display = "block";
  document.getElementsByTagName("form")[0].style.display = "none";
  button.style.display = "none";

  if (choice_made === "cross") {
    document.getElementById("crossHeader").style.display = "inline";
  } else if (choice_made === "circle") {
    document.getElementById("circleHeader").style.display = "inline";
  }
}

function computerMark(i) {
  let computerChoice = Math.floor(Math.random() * 10);

  if (
    computerChoice === 9 ||
    positionsOccupied.indexOf(computerChoice) !== -1 ||
    (computerPositionsOccupied.length > 0 &&
      computerPositionsOccupied.indexOf(computerChoice) !== -1)
  ) {
    return computerMark(i);
  } else {
    if (choice_made === "cross") {
      computerPositionsOccupied.push(computerChoice);
      squares[computerChoice].style.backgroundImage =
        'url("images/circle.png")';
      squares[computerChoice].style.backgroundSize = "cover";
    } else if (choice_made === "circle") {
      computerPositionsOccupied.push(computerChoice);
      squares[computerChoice].style.backgroundImage = 'url("images/cross.png")';
      squares[computerChoice].style.backgroundSize = "cover";
    }
  }
}

function choice_confirmed(button) {
  if (choice_made === "cross") {
    start_game(button);

    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function () {
        if (computerPositionsOccupied.indexOf(i) !== -1) {
          alert("That place is already marked by the computer!");
        } else {
          positionsOccupied.push(i);
          this.style.backgroundImage = "url(images/cross.png)";
          this.style.backgroundSize = "cover";

          computerMark(i);
          winConditions();
        }
      });
    }
  } else if (choice_made === "circle") {
    start_game(button);

    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function () {
        if (computerPositionsOccupied.indexOf(i) !== -1) {
          alert("That place is already marked by the computer!");
        } else {
          positionsOccupied.push(i);
          this.style.backgroundImage = "url(images/circle.png)";
          this.style.backgroundSize = "cover";

          computerMark(i);
          winConditions();
        }
      });
    }
  } else {
    alert("The game can't start unless you choose cross or circle!");
  }
}
