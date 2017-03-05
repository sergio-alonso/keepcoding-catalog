function extensionJson( core ) {
  "use strict";

  var _log = "extension::json::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  var saveData = function( url, data ) {
    $.ajax( {
      type: "POST",
      url: url,
      dataType: "json",
      data: data,
      success: function( data ) {
        alert( "Gracias! Lo tenemos." );
      }
    } );
  };

  var loadData = function( src, success ) {
    $.getJSON( src, success );
  };

  core.sandbox.loadData = function( src, success ) {
    loadData( src, success );
  };

  core.sandbox.saveData = function( url, data ) {
    saveData( url, data );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = extensionJson;
