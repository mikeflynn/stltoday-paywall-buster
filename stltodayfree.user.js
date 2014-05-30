// ==UserScript==
// @name "STLToday Free"
// @description "A user script to automatically bypass the paywall by marking the content as free."
// @match http://*.stltoday.com/*
// ==/UserScript==
 
function makeFree() {
  var m = document.getElementsByTagName('meta');
  for(var i in m) {
    if(m[i].name == '__sync_contentCategory') {
      m[i].content = 'free';
    }
  }
}
makeFree();
