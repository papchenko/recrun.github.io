/*
    vibro for mobile device
    v 1.0
*/

'use strict'


function vibroMobile() {

  const vibro = document.querySelectorAll('.vibro');
  const media = matchMedia('(max-width: 767px)');
  
    if(media.matches) {
      for (let i = 0; i < vibro.length; i++) {
        vibro[i].addEventListener('click', (e) => {
        navigator.vibrate(20);
        });
      }
    }
  }

export {
  vibroMobile
}