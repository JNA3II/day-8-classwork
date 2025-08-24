let name = prompt("What is your name?");
let age = prompt("What is your age?");
age = Number(age);


function checkAge(age) {
  if (age >= 18) {
    return "You can drive";
  } else {
    return "You're too young to drive";
  }
}


let message = checkAge(age);


alert(Hello ${name}, ${message});
﻿
