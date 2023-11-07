let audioElement = new Audio("1.mp3");

// Initialize the Variables:
let songIndex = 0;
let songItem = document.getElementsByClassName("songItem");
let songPlay = document.getElementsByClassName("songPlay");
let currentSong = document.getElementsByClassName("currentSong")[0];
let progressBar = document.getElementById("progressBar");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let songs = [
  { songName: "What makes you beautiful", filePath: "1.mp3" },
  { songName: "Just you and I", filePath: "2.mp3" },
  { songName: "Stanly", filePath: "3.mp3" },
  { songName: "Heat Waves", filePath: "4.mp3" },
  { songName: "Desires", filePath: "5.mp3" },
  { songName: "Ma Belle", filePath: "6.mp3" },
  { songName: "Teri Hogaiyaan", filePath: "7.mp3" },
  { songName: "Raataan Lambiyan", filePath: "8.mp3" },
];

// Array.from(songItem).forEach((element, index) => {
//   document.getElementsByClassName("songTitle")[0].innerHTML =
//     songs[index].songName;
// });

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

document.onkeydown = (event) => {
  if (event.keyCode == 32) {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    } else {
      audioElement.pause();
      gif.style.opacity = 0;
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
    }
  } else if (event.keyCode == 37) {
    playPreviousSong();
  } else if (event.keyCode == 39) {
    playNextSong();
  }
};

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  // Update scrollbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(songPlay).forEach((e) => {
    e.classList.add("fa-circle-play");
    e.classList.remove("fa-circle-pause");
  });
};

Array.from(songPlay).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    currentSong.innerHTML = songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});

const playNextSong = () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  currentSong.innerHTML = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
};

const playPreviousSong = () => {
  if (songIndex <= 0) {
    songIndex = 7;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  currentSong.innerHTML = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
};

document.getElementById("previous").addEventListener("click", () => {
  playPreviousSong();
});

document.getElementById("next").addEventListener("click", () => {
  playNextSong();
});
