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
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDebug()" );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleSearchResult;
