let toDoItems = document.getElementsByClassName("to-do-items")[0];
let input = document.getElementById("input");
let trashIcon = document.getElementById("trashIcon");

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addItem();
  }
});

const addItem = () => {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.style.color = "lightgray";

  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
    divParent.style.textDecoration = "line-through";
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";

  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);

  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = "";
};
