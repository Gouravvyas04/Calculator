var btns = document.querySelectorAll(".btn");
let input = document.querySelector(".inp");
let enter = document.querySelector(".enter");
let clear = document.querySelector(".clr");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //   input.value = "";
    input.value += btn.textContent;
  });
});

enter.addEventListener("click", () => {
  input.value += ` = ${eval(input.value)}`;
});

clear.addEventListener("click", () => {
  input.value = "";
});
