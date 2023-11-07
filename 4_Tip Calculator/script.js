let amount = document.getElementById("amount");
let people = document.getElementById("people");
let quality = document.getElementById("quality");
let tipAmount = document.getElementById("tipAmount");

const calculate = () => {
  let tip = ((amount.value * quality.value) / people.value).toFixed(2);

  if (tip == "NaN") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "Tip $" + tip + " each";
    showTipAmount();
  }
  amount.value = "";
  people.value = "";
  quality.value = "";
};

const showTipAmount = () => {
  tipAmount.className = "show";
  setTimeout(function () {
    tipAmount.className = tipAmount.className.replace("show", "");
  }, 3000);
};
