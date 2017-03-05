function extensionJson( core ) {
  "use strict";

  var _log = "extension::json::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = entensionJson;
