function extensionLog( core ) {
  "use strict";

  var init = function() {
    console.log( "extension::log::init()" );
    core.log = this;
    core.sandbox.log = this;
  };

  var debug = function( message ) {
    console.log( message );
  };

  var error = function( message ) {
    console.error( message );
  };

  return {
    init: init,
    debug: debug,
    error: error
  };
}

module.exports = extensionLog;
