// ==UserScript==
// @name "STLToday Free"
// @version 2.2
// @description "A user script to automatically bypass the paywall by marking the content as free."
// @match http://*.stltoday.com/*
// @run-at document-start
// ==/UserScript==

function updateMetaTag() {
  var m = document.getElementsByTagName('meta');
  if(m.length > 0) {
    for(var i in m) {
      if(m[i].name === '__sync_contentCategory') {
        m[i].content = 'free';
      }
    }
  } else {
    setTimeout(function() { updateMetaTag(); }, 100);
  }
}

function addMetaTag() {
  var head = document.getElementsByTagName('head');
  if(head.length > 0) {
    head[0].insertAdjacentHTML('afterbegin', '<meta name="__sync_contentCategory" content="free">');
  } else {
    setTimeout(function() { addMetaTag(); }, 100);
  }
}

function killSurvey() {
  window._402nosurvey = 1;
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ killSurvey +')();'));
(document.body || document.head || document.documentElement).appendChild(script);

updateMetaTag();
//addMetaTag();
