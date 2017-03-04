function moduleResource( sandbox ) {
  "use strict";

  var _log = "module::resource::";

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleResource;
