let input = document.getElementById("input");
let grid = document.getElementsByClassName("grid")[0];

const dayNightMode = () => {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 6 && hour <= 18) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
};

window.addEventListener("load", dayNightMode);

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    loadImg();
  }
});

const removeImg = () => {
  grid.innerHTML = "";
};

const loadImg = () => {
  removeImg();
  let url =
    "https://api.unsplash.com/search/photos/?query=" +
    input.value +
    "&per_page=9&client_id=........";

  fetch(url)
    .then((response) => {
      // console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        alert(response.status);
      }
    })
    .then((data) => {
      let imageNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        imageNodes[i] = document.createElement("div");
        imageNodes[i].className = "img";
        imageNodes[i].style.backgroundImage =
          "url(" + data.results[i].urls.raw + ")";
        imageNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
          grid.appendChild(imageNodes[i]);
        });
      }
    });
};
