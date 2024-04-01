var btns = document.querySelectorAll(".btn");
let input = document.querySelector(".inp");
let enter = document.querySelector(".enter");
let clear = document.querySelector(".clr");
let output = false;

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //   input.value = "";
    input.value += btn.textContent;
    if (output == true) {
      input.value = "";
    output = false;
    }
  });
});

enter.addEventListener("click", () => {
  input.value += ` = ${eval(input.value)}`;
  output = true;
});

clear.addEventListener("click", () => {
  input.value = "";
});