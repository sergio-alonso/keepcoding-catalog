function extensionScrollInfinite( core ) {
  "use strict";

  var _log = "extension::scroll-infinite::",
      _window,
      _doc;

  var onInit = function() {
    core.log.debug( _log + "onInit()" );

    _doc = core.dom.find( document );

    core.log.warn( _log + "onInit() link scroll to window instead of module?" );
    _window = core.dom.find( window );

    core.scroll = this;
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var _infinite = function( callback ) {
    if ( _doc.height() - _window.height() == _window.scrollTop() ) {
      callback();
    }
  };

  core.sandbox.infiniteScroll = function( callback ) {
    _window.scroll( function() {
      _infinite( callback );
    } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = extensionScrollInfinite;
