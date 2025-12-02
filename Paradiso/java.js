let deButton = document.querySelector("menu li:nth-of-type(1) button");
let menu = document.querySelector("header nav:nth-of-type(1)");

deButton.addEventListener("click", toggleButton);

function toggleButton() {
  deButton.classList.toggle("is-open"); // animates hamburger
  menu.classList.toggle("is-open");     // slides menu in/out
  document.documentElement.classList.toggle("no-scroll");
}



