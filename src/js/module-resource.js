function moduleResource( sandbox ) {
  "use strict";

  var _log = "module::resource::",
      _api = "http://" + location.host + "/api",
      _url = _api + "/comments",
      items = $( "<ul/>", { class: "items" } );

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );

    sandbox.subscribe( "msg-showed-article", onShowArticle );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var loadItem = function( i, item ) {
    $( "<li/>", { class: "item", text: item.comment } ).appendTo( items );
  };

  var onLoadData = function( data ) {
    $.each( data, loadItem );
    $( "#detail-comments" ).append( items );
  };

  var onShowArticle = function() {
    sandbox.log.debug( _log + "onShowArticle()" );

    sandbox.find( "#comment" ).textareaCounter( { limit: 120 } );

    sandbox.loadData( _url, onLoadData );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleResource;
