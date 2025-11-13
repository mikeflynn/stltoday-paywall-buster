function clean() {
  let subwall = document.querySelector("#lee-subscription-wall");
  if (subwall) {
    subwall.remove();
  }

  let regwall = document.querySelector("#lee-registration-wall");
  if (regwall) {
    regwall.remove();
  }

  let offers = document.querySelector("#access-offers-modal")
  if (offers) {
    offers.remove();
  }

  let backdrop = document.querySelectorAll(".modal-backdrop");
  if (backdrop && backdrop.length > 0) {
    backdrop[0].remove();
  }

  document.querySelector("body").style.overflow = "auto";
}

function evade() {
  let classChange = {
    "lee-article-text": "free-article-text",
    "asset-content": "asset-content"
  }

  for (const cur in classChange) {
    var divs = document.querySelectorAll("."+cur);
    if (divs.length > 0) {
      for (i = 0; i < divs.length; ++i) {
        var n = classChange[cur];
        if (n != "" && n != cur) {
          divs[i].classList.add(classChange[cur]);
          divs[i].classList.remove(cur);
        }

        divs[i].style.hidden = false;
      }
    } else {
      setTimeout(evade, 10);
    }
  }
}

function decrypt(){
  const lee_det = (sInput) => {
    var sOutput = '';
    for (var i = 0, c = sInput.length; i < c; i++) {
        var nChar = sInput.charCodeAt(i);
        if (nChar >= 33 && nChar <= 126) {
            sTmp = String.fromCharCode(33 + (((nChar - 33) + 47) % 94));
            sOutput += sTmp
        } else {
            sOutput += sInput.charAt(i)
        }
    }
    return sOutput
  }
  document.querySelectorAll('.subscriber-only.encrypted-content').forEach(function(el){
      el.innerHTML = lee_det(el.textContent);
      el.classList.remove('encrypted-content');
      el.style.display = 'block';
  });
}

// Document Start
var script = document.createElement("script");
script.src = chrome.runtime.getURL("inject.js");
(document.body || document.head || document.documentElement).appendChild(
  script,
);

setTimeout(evade, 100);
setTimeout(clean, 500);
setTimeout(decrypt, 500);