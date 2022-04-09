document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    {
      name: "1",
      img: "images/1.jpg",
    },

    {
      name: "1",
      img: "images/1.jpg",
    },

    {
      name: "2",
      img: "images/2.jpg",
    },

    {
      name: "2",
      img: "images/2.jpg",
    },

    {
      name: "3",
      img: "images/3.jpg",
    },

    {
      name: "3",
      img: "images/3.jpg",
    },

    {
      name: "4",
      img: "images/4.jpg",
    },

    {
      name: "4",
      img: "images/4.jpg",
    },

    {
      name: "5",
      img: "images/5.jpg",
    },

    {
      name: "5",
      img: "images/5.jpg",
    },

    {
      name: "6",
      img: "images/6.jpg",
    },

    {
      name: "6",
      img: "images/6.jpg",
    },
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");

  const resultDisplay = document.querySelector("#result");

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("width", "100px");
      card.setAttribute("height", "100px");
      card.setAttribute("border", "1px solid red");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionoOneId = cardsChosenId[0];
    const optionoTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You have found a match!");
      cards[optionoOneId].setAttribute("src", "images/match.jpg");
      cards[optionoTwoId].setAttribute("src", "images/match.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionoOneId].setAttribute("src", "images/blank.jpg");
      cards[optionoTwoId].setAttribute("src", "images/blank.jpg");

      alert("Sorry,try again!");
    }

    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = "Congratulations!You've found them all!";
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 200);
    }
  }

  createBoard();
});
