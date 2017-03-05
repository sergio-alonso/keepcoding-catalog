function extensionMsg( core ) {
  "use strict";

  var cache = {};

  var init = function() {
    core.log.debug( "extension::msg::init()" );
    core.msg = this;
  };

  var onSubscribe = function( message, callback ) {
    if ( !cache[ message ] ) {
      cache[ message ] = [];
    }
    cache[ message ].push( { callback: callback } );
  };

  var onNotify = function( message, data ) {
    core.log.debug( "extension::msg::onNotify() message='" + message + "'", data );
    if ( !cache[ message ] ) {
      cache[ message ] = [];
    }
    var i;
    for ( i = 0; i < cache[ message ].length; i++ ) {
      cache[ message ][ i ].callback( data );
    }
  };

  core.sandbox.subscribe = function( message, callback ) {
    onSubscribe( message, callback );
  };

  core.sandbox.notify = function( message, data ) {
    onNotify( message, data );
  };

  return {
    init: init,
    subscribe: onSubscribe,
    notify: onNotify
  };
}

module.exports = extensionMsg;
