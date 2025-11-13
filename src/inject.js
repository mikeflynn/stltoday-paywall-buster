window.lee_meter_loaded = true;
window.show_dimissable_registration = true;
window.lee_regwall_loaded = true;
window.articleStatus = "read_article";
window.__tnt.subscription = true;
window.__tnt.user.services = true;

function defuse() {
  if(window.TNCMS && window.TNCMS.Access) {
    window.TNCMS.Access.checkAccess = function(fnSuccess, fnFailure) {
      fnSuccess({required: false});
    }
  } else if(window.__tnt.subscription) {
    articleStatus = "read_article"
  } else {
    setTimeout(defuse, 10);
  }
}

defuse();