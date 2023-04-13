/*
    Menu v 1.0
*/
"use strict";

// menu
function menu() {
  const mobileMenu = document.getElementById('burger-menu');
  const overlay = document.getElementById('menu');
  
    mobileMenu.addEventListener('click', function() {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });  
}



export {
  menu
};