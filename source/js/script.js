"use strict";

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

let button = document.querySelectorAll(".navigation span");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    scrollTo(document.getElementById(button[i].innerHTML));
  });
}
