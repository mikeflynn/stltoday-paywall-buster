window.lee_meter_loaded = true;
window.show_dimissable_registration = true;

function defuse() {
  if(window.TNCMS && window.TNCMS.Access) {
    console.log("FOUND IT!");
    window.TNCMS.Access.checkAccess = function(fnSuccess, fnFailure) {
      fnSuccess({required: false});
    }
  } else {
    console.log("WAITING...");
    setTimeout(defuse, 10);
  }
}

defuse();