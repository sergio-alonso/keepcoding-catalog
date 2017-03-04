function moduleSearchResult( sandbox ) {

  var _log = "module::search-result::",
      _container;

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );

    _container = sandbox.find( ".masonry-container" );

    // TODO: this must use the sandbox
    _container.imagesLoaded( function() {
      _container.masonry( {
        columnWidth: ".item",
        itemSelector: ".item"
      } );
    } );

    sandbox.infiniteScroll( function() {
      _onScroll();
    } );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDebug()" );
  };

  var _onScroll = function() {
    sandbox.log.warn( _log + "onScroll() Call AJAX!" );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleSearchResult;
