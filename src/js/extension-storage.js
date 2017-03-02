function extensionStorage( core ) {
  "use strict";

  var _log = "extension::storage::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );

    core.storage = this;
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var store = function( object, data ) {
    core.log.debug( _log + "store()", data );
    localStorage.setItem( object, JSON.stringify( data ) );
  };

  core.sandbox.store = function( object, data ) {
    store( object, data );
  };

  return {
    init: onInit,
    destroy: onDestroy,
    store: store
  };

}

module.exports = extensionStorage;
