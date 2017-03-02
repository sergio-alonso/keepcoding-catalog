function extensionStorage( core ) {
  "use strict";

  var _log = "extension::storage::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );

    if ( typeof Storage === "undefined" ) {

      // TODO: Handle this error
      core.log.error( _log + "onInit() No HTML5 Storage Support" );
    }

    core.storage = this;
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var store = function( object, data ) {
    core.log.debug( _log + "store()", data );

    localStorage.setItem( object, JSON.stringify( data ) );
  };

  var session = function( object, data ) {
    core.log.debug( _log + "session()", data );

    sessionStorage.setItem( object, JSON.stringify( data ) );
  };

  core.sandbox.store = function( object, data ) {
    store( object, data );
  };

  core.sandbox.session = function( object, data ) {
    session( object, data );
  };

  return {
    init: onInit,
    destroy: onDestroy,
    store: store,
    session: session
  };

}

module.exports = extensionStorage;
