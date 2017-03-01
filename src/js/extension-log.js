var coreLog = function( core ) {
  "use strict";

  var debug = function( message ) {
    console.log( message );
  };

  var error = function( message ) {
    console.error( message );
  };

  var init = function() {
    console.log( "extension::log::init()" );
    core.log = this;
    core.sandbox.log = this;
  };

  return {
    init: init,
    debug: debug,
    error: error
  };
};

var Core = require( "./framework-core" );
Core.use( "log", coreLog );

