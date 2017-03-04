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

  var _handleSuccess = function( html ) {
    var data = $( html );
    sandbox.log.debug( _log + "_handleSuccess()", data );

    _container.masonry().append( data ).masonry( "appended", data );
  };

  var _onScroll = function() {
    sandbox.log.debug( _log + "onScroll()" );

    sandbox.request( "resources.html", {
      success: function( response ) {
        _handleSuccess( response );
      },
      failure: function( response ) {
        sandbox.log.error( _log + "_onScroll() request failure" );
      }
    } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleSearchResult;
