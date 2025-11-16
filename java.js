let deButton = document.querySelector("menu li:nth-of-type(1) button");

let menu = document.querySelector("header nav:nth-of-type(1)");


const ul = document.querySelector('main > ul:nth-of-type(1)');
const btnLeft = ul.querySelector('li:first-child > button');
const btnRight = ul.querySelector('li:last-child > button');

const scrollAmount = 400; // pixels per klik

deButton.addEventListener("click", toggleButton);

function toggleButton() {
  deButton.classList.toggle("is-open"); // animates hamburger
  menu.classList.toggle("is-open");     // slides menu in/out
  document.documentElement.classList.toggle("no-scroll");
}

btnLeft.addEventListener('click', () => {
  ul.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  ul.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

