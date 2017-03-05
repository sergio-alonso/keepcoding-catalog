function extensionScrollToTop( core ) {

  var _log = "extension::scroll-to-top::",
      _window,
      _scrollToTop;

  var onInit = function() {
    core.log.debug( _log + "onInit()" );

    _window = core.dom.find( window );
    _window.scroll( onScroll );

    _scrollToTop = core.dom.find( ".scroll-to-top" );
    _scrollToTop.bind( "click", onClick );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var onScroll = function() {
    if ( _window.scrollTop() > 100 ) {
      _scrollToTop.fadeIn();
    } else {
      _scrollToTop.fadeOut();
    }
  };

  var onClick = function() {
    core.dom.find( "html, body" ).animate( { scrollTop: 0 }, 600 );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = extensionScrollToTop;
