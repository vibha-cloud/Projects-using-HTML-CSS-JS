let turnMusic = new Audio("./resources/ting.mp3");
let gameoverMusic = new Audio("./resources/gameover.mp3");

let turn = "X";

const changeTurn = () => {
  if (turn === "X") {
    turn = "O";
  } else if (turn === "O") {
    turn = "X";
  }
};

let gameOver = false;
let info = document.querySelector(".info");

const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 2, 3.9, 0],
    [3, 4, 5, 2, 12, 0],
    [6, 7, 8, 2, 20, 0],
    [0, 3, 6, -6, 12, 90],
    [1, 4, 7, 2, 12, 90],
    [2, 5, 8, 10.1, 12, 90],
    [0, 4, 8, 2, 12, 45],
    [2, 4, 6, 2, 12, -45],
  ];
  for (let i = 0; i < 8; i++) {
    if (
      boxTexts[wins[i][0]].innerHTML === boxTexts[wins[i][1]].innerHTML &&
      boxTexts[wins[i][0]].innerHTML === boxTexts[wins[i][2]].innerHTML &&
      boxTexts[wins[i][0]].innerHTML !== ""
    ) {
      info.innerHTML = boxTexts[wins[i][0]].innerHTML + " Won !!";
      gameOver = true;
      gameoverMusic.play();
      document.querySelector(".img").style.display = "block";
      let line = document.querySelector(".line");
      line.style.width = "20vw";
      line.style.transform = `translate(${wins[i][3]}vw, ${wins[i][4]}vw) rotate(${wins[i][5]}deg)`;
      break;
    }
  }
};

let boxes = document.getElementsByClassName("box");
let arr = Array.from(boxes);

arr.forEach((box) => {
  let boxText = box.querySelector(".boxText");
  box.addEventListener("click", () => {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      changeTurn();
      turnMusic.play();
      checkWin();
      if (!gameOver) {
        info.innerHTML = "Turn for " + turn;
      }
    }
  });
});

let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  let boxTexts = document.getElementsByClassName("boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerHTML = "";
  });
  gameOver = false;
  turn = "X";
  info.innerHTML = "Turn for " + turn;
  document.querySelector(".img").style.display = "none";
  document.querySelector(".line").style.width = "0";
});
