window.lee_meter_loaded = true;
window.show_dimissable_registration = true;

function defuse() {
  if(window.TNCMS && window.TNCMS.Access) {
    window.TNCMS.Access.checkAccess = function(fnSuccess, fnFailure) {
      fnSuccess({required: false});
    }
  } else {
    setTimeout(defuse, 10);
  }
}

defuse();