let dino = document.querySelector(".dino");
let obstacle = document.querySelector(".obstacle");
let gameOver = document.querySelector(".gameOver");
let scoreCount = document.querySelector(".scoreCount");

let score = 0;
let cross = true;

let audio = new Audio("./resources/music.mp3");
let audioOver = new Audio("./resources/gameover.mp3");

setTimeout(() => {
  audio.play();
}, 1000);

document.onkeydown = (event) => {
  if (event.keyCode == 38) {
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  } else if (event.keyCode == 39) {
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 120 + "px";
  } else if (event.keyCode == 37) {
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 120 + "px";
  }
};

setInterval(() => {
  let dx = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  let dy = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("bottom")
  );
  let ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  let oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("bottom")
  );

  let offSetX = Math.abs(dx - ox);
  let offSetY = Math.abs(dy - oy);

  if (offSetX < 73 && offSetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("animateObstacle");
    audioOver.play();
    setTimeout(() => {
      audio.pause();
      audioOver.pause();
    }, 1000);
  } else if (offSetX < 160 && cross) {
    score += 10;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      let ainDuration = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      let newDuration = ainDuration - 0.1;
      obstacle.style.animationDuration = newDuration + "s";
    }, 500);
  }
}, 10);

const updateScore = (score) => {
  scoreCount.innerHTML = score;
};
