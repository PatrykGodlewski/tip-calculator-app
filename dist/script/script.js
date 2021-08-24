let total = document.getElementById("o_total");
let tipAmount = document.getElementById("o_tip");
let value = 0;
let bill = 0;
let ppl = 0;
let tipProcent = 0;
let tipTotal = 0;
const buttons = document.getElementsByClassName("select_number");
let tipCustom = 0;

function getTip(e) {
  console.log(e.target.value);
  tipProcent = e.target.value;
}

function tipButton(e) {
  if (e.target.hasAttribute("id")) {
    e.target.removeAttribute("id");
  } else {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].removeAttribute("id");
      e.target.setAttribute("id", "n_active");
      document.querySelector(".n_custom").value = undefined;
    }
  }
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tipButton);
  buttons[i].addEventListener("click", getTip);
}

document.addEventListener("keyup", getValbill);
function getValbill() {
  bill = document.querySelector("#input_bill").value;
}

document.addEventListener("keyup", getValppl);
function getValppl() {
  ppl = document.querySelector("#input_ppl").value;
}
// document.addEventListener("onchange", getValctip);
function getValctip() {
  tipCustom = document.querySelector(".n_custom").value;
}

function calcValue() {
  value = bill / ppl;
  value = value.toFixed(2);
  tipTotal = value * tipProcent;
  tipTotal = tipTotal.toFixed(2);
  console.log(value);
}

document.addEventListener("keyup", update);
function update() {
  calcValue();
  if (value == Infinity || value == "NaN" || value == undefined || value == 0) {
    value = "$0.00";
    tipTotal = "$0.00";
    total.innerText = value;
    tipAmount.innerText = tipTotal;
  } else {
    total.innerText = "$" + value;
    tipAmount.innerText = "$" + tipTotal;
  }
}
document.addEventListener("click", update);

function reset() {
  value = 0;
  bill = 0;
  ppl = 0;
  tipProcent = 0;
  tipTotal = 0;
  document.querySelector("#input_bill").value = undefined;
  document.querySelector("#input_ppl").value = undefined;
  document.querySelector(".n_custom").value = undefined;
  for (i = 0; i < buttons.length; i++) {
    buttons[i].removeAttribute("id");
  }
  update();
}
function customTip() {
  if (tipCustom <= 100 && tipCustom >= 1) {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].removeAttribute("id");
      tipProcent = tipCustom / 100;
      update();
      console.log("xd");
    }
  }
}
