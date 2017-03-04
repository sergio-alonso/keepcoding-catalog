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

    sandbox.subscribe( [
      "msg-like-article"
    ], onLikeEvent );

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

    load( "resources.html" );
  };

  var onLikeEvent = function( data ) {
    sandbox.log.debug( _log + "onLikeEvent()", data );

    _container.masonry( "remove", sandbox.find( "#" + data.id ) ).masonry( "layout" );

    load( "resource.html" );
  };

  var load = function( url ) {
    sandbox.request( url, {
      success: function( response ) {
        _handleSuccess( response );
      },
      failure: function( response ) {
        sandbox.log.error( _log + " request failure" );
      }
    } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleSearchResult;
