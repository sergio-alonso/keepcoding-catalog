function moduleResource( sandbox ) {
  "use strict";

  var _log = "module::resource::";

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );

    sandbox.subscribe( [
      "msg-showed-article"
    ], onShowArticle );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var onShowArticle = function() {

//F    sandbox.textareaCounter( sandbox.find( "#comment" ), { limit: 120 } );

    sandbox.find( "#comment" ).textareaCounter( { limit: 120 } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
}

module.exports = moduleResource;
