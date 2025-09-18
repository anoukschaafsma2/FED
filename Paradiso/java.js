// Selecteer de elementen
const hamMenu = document.querySelector(".ham-menu"); 
const offScreenMenu = document.querySelector(".off-screen-menu"); 
const closeMenu = document.getElementById('close-menu'); 
const body = document.body;

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active"); 
  offScreenMenu.classList.toggle("active"); 
  body.classList.toggle("no-scroll"); // Voeg hier de scroll-beperkingen toe
});

closeMenu.addEventListener("click", () => {
  hamMenu.classList.remove("active"); 
  offScreenMenu.classList.remove("active"); 
  body.classList.remove("no-scroll"); // Verwijder de scroll-beperkingen als het menu gesloten wordt
});
