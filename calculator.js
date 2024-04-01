var btns = document.querySelectorAll(".btn");
let input = document.querySelector(".inp");
let enter = document.querySelector(".enter");
let clear = document.querySelector(".clr");
<<<<<<< HEAD
let output = false;
=======
var output = false;
>>>>>>> origin/main

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //   input.value = "";
    input.value += btn.textContent;
<<<<<<< HEAD
    if (output == true) {
      input.value = "";
=======
    output = true;
    if(output==true){
      input.value="";
>>>>>>> origin/main
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