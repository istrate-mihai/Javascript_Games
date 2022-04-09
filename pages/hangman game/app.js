function drawPole(i) {
  let x1, y1, x2, y2;

  if (i === 0) {
    x1 = 100;
    y1 = 100;
    x2 = 100;
    y2 = 450;
  } else if (i === 1) {
    x1 = 100;
    y1 = 450;
    x2 = 50;
    y2 = 450;
  } else if (i === 2) {
    x1 = 100;
    y1 = 450;
    x2 = 150;
    y2 = 450;
  } else if (i === 3) {
    x1 = 100;
    y1 = 100;
    x2 = 250;
    y2 = 100;
  } else if (i === 4) {
    x1 = 250;
    y1 = 100;
    x2 = 250;
    y2 = 160;
  }

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawHead() {
  ctx.beginPath();
  ctx.arc(250, 180, 20, 0, Math.PI * 2);
  ctx.stroke();
}

function drawBody() {
  ctx.beginPath();
  ctx.moveTo(250, 200);
  ctx.lineTo(250, 280);
  ctx.stroke();
}

function drawLeftLeg() {
  ctx.beginPath();
  ctx.moveTo(250, 280);
  ctx.lineTo(220, 370);
  ctx.stroke();
}

function drawRightLeg() {
  ctx.beginPath();
  ctx.moveTo(250, 280);
  ctx.lineTo(280, 370);
  ctx.stroke();
}

function drawLeftArm() {
  ctx.beginPath();
  ctx.moveTo(250, 215);
  ctx.lineTo(230, 265);
  ctx.stroke();
}

function drawRightArm() {
  ctx.beginPath();
  ctx.moveTo(250, 215);
  ctx.lineTo(270, 265);
  ctx.stroke();
}

function eliminateLetter() {
  let selectorChildren = selector.children;

  let foundLetters = [];

  eliminated_Letters_Array.push(selector.value);

  for (let k = 0; k < invisible_letters.length; k++) {
    if (
      selector.value.toUpperCase() ===
      invisible_letters[k].innerHTML.toUpperCase()
    ) {
      foundLetters.push(invisible_letters[k]);
      allFoundLetters.push(invisible_letters[k]);
    }
  }

  if (foundLetters.length > 0) {
    for (let m = 0; m < foundLetters.length; m++) {
      foundLetters[m].setAttribute("class", "letter visible_letter");
    }
  } else {
    if (current_Drawing_Stage === 1) {
      drawHead();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 2) {
      drawBody();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 3) {
      drawLeftLeg();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 4) {
      drawRightLeg();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 5) {
      drawLeftArm();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 6) {
      drawRightArm();
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 7) {
      document.getElementById("straw").style.visibility = "visible";
      current_Drawing_Stage += 1;
    } else if (current_Drawing_Stage === 8) {
      document.getElementById("straw").src = "images/firestraw.png";
      document.getElementById("straw").style.zIndex = "-1";
      document.getElementById("straw").style.top = "80px";
      document.getElementById("straw").style.height = "400px";
      document.body.style.backgroundColor = "lightgrey";
      document.forms[0].style.display = "none";
      document.getElementsByTagName("p")[0].innerHTML =
        "You've got burned the word was: " + selectedWord.toUpperCase();
      document.getElementsByTagName("p")[0].style.color = "red";
      let sound = document.createElement("audio");
      let source = document.createElement("source");
      source.setAttribute("src", "audio/Fire-sound.mp3");
      source.setAttribute("type", "audio/mpeg");
      sound.appendChild(source);
      sound.play();
    }
  }

  if (invisible_letters.length === 0) {
    document.write(
      '<p style="color:blue;font-size:24px;">You\'ve won the word was: ' +
        selectedWord.toUpperCase() +
        "</p>"
    );
    return;
  }

  for (let i = 0; i < selectorChildren.length; i++) {
    if (selector.value === selectorChildren[i].value) {
      selector.removeChild(selectorChildren[i]);
    }
  }
  document.getElementById("letterRecords").innerHTML =
    "Used letters: " + eliminated_Letters_Array;
}

let gameZone = document.getElementById("myCanvas");
let ctx = gameZone.getContext("2d");

let i = Math.floor(Math.random() * 10);
let j = Math.floor(Math.random() * 10);

let wordContainer = document.getElementById("wordContainer");

let words = [
  [
    "age",
    "ago",
    "agree",
    "air",
    "all",
    "alone",
    "never",
    "now",
    "news",
    "therefore",
  ],
  [
    "base",
    "basket",
    "bath",
    "beer",
    "bean",
    "lend",
    "length",
    "less",
    "receive",
    "terrible",
  ],
  [
    "each",
    "ear",
    "early",
    "earn",
    "earth",
    "east",
    "weak",
    "wear",
    "weather",
    "thin",
  ],
  [
    "game",
    "garden",
    "gate",
    "ocean",
    "off",
    "start",
    "station",
    "stay",
    "steal",
    "wedding",
  ],
  [
    "red",
    "remember",
    "remind",
    "weight",
    "welcome",
    "were",
    "spoon",
    "sport",
    "spread",
    "tomorrow",
  ],
  [
    "pretty",
    "prevent",
    "price",
    "prince",
    "prison",
    "priority",
    "prize",
    "probably",
    "problem",
    "summer",
  ],
  [
    "corner",
    "correct",
    "cost",
    "total",
    "touch",
    "town",
    "skin",
    "skirt",
    "sky",
    "report",
  ],
  [
    "private",
    "prime",
    "portable",
    "friend",
    "friendly",
    "from",
    "entrance",
    "escaped",
    "even",
    "yesterday",
  ],
  [
    "free",
    "freedom",
    "freeze",
    "fresh",
    "hour",
    "hurry",
    "husband",
    "hurt",
    "zoo",
    "zombie",
  ],
  [
    "without",
    "threat",
    "substance",
    "storm",
    "restaurant",
    "over",
    "neighbour",
    "problematic",
    "glass",
    "kitchen",
  ],
];

let current_Drawing_Stage = 1;
let selectedWord = words[i][j];
let wordArray = [];
let eliminated_Letters_Array = [];

let selector = document.forms[0][0];
selector.addEventListener("change", eliminateLetter);

let allFoundLetters = [];

for (let i = 0; i < selectedWord.length; i++) {
  if (i === 0 || i === selectedWord.length - 1) {
    let letter = document.createElement("span");
    letter.innerHTML =
      '<span class="fill">@</span><span class="letter visible_letter">' +
      selectedWord[i].toUpperCase() +
      "</span>" +
      '<span class="fill">@</span>';
    wordContainer.appendChild(letter);
    wordArray.push(selectedWord[i]);
  } else {
    let letter = document.createElement("span");
    letter.innerHTML =
      '<span class="fill">@</span>' +
      '_<span class="letter invisible_letter">' +
      selectedWord[i].toUpperCase() +
      "</span>" +
      '<span class="fill">@</span>';
    wordContainer.appendChild(letter);
    wordArray.push(selectedWord[i]);
  }
}

let invisible_letters = document.getElementsByClassName("invisible_letter");

for (let i = 0; i < 5; i++) {
  drawPole(i);
}
