let input = document.getElementById("input");
let string = "";
let buttons = document.querySelectorAll(".btn");
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (event.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += event.target.innerHTML;
      input.value = string;
    }
  });
});
