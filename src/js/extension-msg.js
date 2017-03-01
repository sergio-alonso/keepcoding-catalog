var coreMsg = function( core ) {
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

  var onNotify = function( message ) {
    core.log.debug( "extension::msg::onNotify() message='" + message + "'" );
    if ( !cache[ message ] ) {
      cache[ message ] = [];
    }
    var i;
    for ( i = 0; i < cache[ message ].length; i++ ) {
      cache[ message ][ i ].callback.apply();
    }
  };

  core.sandbox.subscribe = function( message, callback ) {
    onSubscribe( message, callback );
  };

  core.sandbox.notify = function( message ) {
    onNotify( message );
  };

  return {
    init: init,
    subscribe: onSubscribe,
    notify: onNotify
  };
};

var Core = require( "./framework-core" );
Core.use( "msg", coreMsg );
