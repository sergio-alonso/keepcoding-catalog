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

  // I'm using the Web Storage Api to mock user handler, but
  // TODO: move to another place

  // Return true if user has been joined
  core.sandbox.isUserJoined = function() {
    return localStorage.hasOwnProperty( "user" );
  };

  // Return true if user has been loged
  core.sandbox.isUserLoged = function() {
    return sessionStorage.hasOwnProperty( "user" );
  }

  core.sandbox.removeUserAccount = function() {
    return localStorage.remove( "user" );
  }

  return {
    init: onInit,
    destroy: onDestroy,
    store: store,
    session: session
  };

}

module.exports = extensionStorage;
