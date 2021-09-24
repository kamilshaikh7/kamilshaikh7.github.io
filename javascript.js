"use strict";
let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
};

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
