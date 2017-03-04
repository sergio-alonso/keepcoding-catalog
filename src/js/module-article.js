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
    var self = sandbox.find( this );
    sandbox.log.debug( _log + "onClick() ", self.attr( "resource-id" ) );
    event.stopPropagation();
  };

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleArticle;

