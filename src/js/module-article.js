function moduleArticle( sandbox ) {
  "use strict";

  var _log = "module::article::",
      _container,
      _pinIcon;

  var onInit = function() {
    sandbox.log.debug( _log + "oninit()" );

    _container = sandbox.find( ".resource" );
    _container.bind( "click", onContainerClick );

    _pinIcon = sandbox.find( ".pin-icon" );
    _pinIcon.bind( "click", onPinIconClick );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var onPinIconClick = function( event ) {
    sandbox.log.warn( _log + "onPinIconClick() check if user is loged in" );
    var self = sandbox.find( this ).attr( "resource-id" );
    event.stopPropagation();
    sandbox.like( self );
    sandbox.notify( "msg-like-article", { id: self } );
  };

  var onContainerClick = function() {
    sandbox.log.debug( _log + "onContainerClick()" );
    sandbox.notify( "msg-show-article" );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleArticle;
