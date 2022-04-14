function clean() {
  let subwall = document.querySelector('#lee-subscription-wall');
  if(subwall) {
    subwall.remove()
  }

  let regwall = document.querySelector('#lee-registration-wall');
  if(regwall) {
    regwall.remove()
  }

  let backdrop = document.querySelectorAll('.modal-backdrop');
  if(backdrop && backdrop.length > 0) {
    backdrop[0].remove();
  }

  document.querySelector('body').style.overflow="auto";
}

function evade() {
  let oldClass = "lee-article-text";
  let newClass = "free-article-text";

  var divs = document.querySelectorAll('.lee-article-text');
  if(divs.length > 0) {
    for(i = 0; i < divs.length; ++i) {
      divs[i].classList.add(newClass);
      divs[i].classList.remove(oldClass);
    }
  } else {
    setTimeout(evade, 10);
  }
}

// Document Start
var script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');
(document.body || document.head || document.documentElement).appendChild(script);

// Overkill, but ¯\_(ツ)_/¯
setTimeout(evade, 100);
setTimeout(clean, 700);
