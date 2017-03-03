function extensionScrollInfinite( core ) {
  "use strict";

  var _log = "extension::scroll-infinite::",
      _window,
      _doc;

  var onInit = function() {
    core.log.debug( _log + "onInit()" );

    _doc = core.dom.find( document );
    _window = core.dom.find( window );
    _window.scroll( _infinite );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var _infinite = function() {
    if ( _doc.height() - _window.height() == _window.scrollTop() ) {
      core.log.warn( "call ajax" );
    }
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = extensionScrollInfinite;
