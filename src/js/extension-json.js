function extensionJson( core ) {
  "use strict";

  var _log = "extension::json::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var loadData = function( src, success ) {
    $.getJSON( src, success );
  };

  core.sandbox.loadData = function( src, success ) {
    loadData( src, success );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = extensionJson;
