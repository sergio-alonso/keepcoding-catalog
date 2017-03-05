function moduleResource( sandbox ) {
  "use strict";

  var _log = "module::resource::",
      _api = "http://" + location.host + "/api",
      _url = _api + "/comments",
      items,
      form;

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );

    sandbox.subscribe( "msg-showed-article", onShowArticle );

    sandbox.find( document ).submit( onSubmit );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var onSubmit = function( e ) {
    form = sandbox.find( e.target );
    if ( form.is( "#comment-form"  ) ) {
      e.preventDefault();
      sandbox.saveData( _url, form.serialize() );
      sandbox.log.warn( _log + "onLoadData() Load only current item" );
      sandbox.loadData( _url, onLoadData );
    }
  };

  var loadItem = function( i, item ) {
    $( "<li/>", { class: "item", text: item.comment } ).appendTo( items );
  };

  var onLoadData = function( data ) {
    sandbox.find( ".items" ).remove();
    items = $( "<ul/>", { class: "items" } );
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
