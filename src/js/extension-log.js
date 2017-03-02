function extensionLog( core ) {
  "use strict";

  var _log = "extension::log::";

  var onInit = function() {
    console.log( _log + "onInit()" );

    core.log = this;
    core.sandbox.log = this;
  };

  var onDestroy = function() {
    console.log( _log + "onDestroy()" );
  };

  var debug = function( message ) {
    console.log( message );
  };

  var warn = function( message ) {
    console.warn( message );
  };

  var error = function( message ) {
    console.error( message );
  };

  return {
    init: onInit,
    destroy: onDestroy,
    debug: debug,
    warn: warn,
    error: error
  };
}

module.exports = extensionLog;
