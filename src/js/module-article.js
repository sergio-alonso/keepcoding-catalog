function moduleArticle( sandbox ) {
  "use strict";

  var _log = "module::article::",
      _pinIcon;

  var onInit = function() {
    sandbox.log.debug( _log + "oninit()" );

    _pinIcon = sandbox.find( ".pin-icon" );
    _pinIcon.bind( "click", onClick );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var onClick = function( event ) {
    sandbox.log.warn( _log + "onClick() check if user is loged in" );
    var self = sandbox.find( this ).attr( "resource-id" );
    event.stopPropagation();
    sandbox.like( self );
    sandbox.notify( "msg-like-article", { id: self } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleArticle;

