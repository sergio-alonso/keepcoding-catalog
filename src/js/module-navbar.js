function moduleNavbar( sandbox ) {
  "use strict";

  var _joinButton;

  function _notifyActionCallback() {
    sandbox.log.debug( "navbar::_notifyActionCallback()" );
    sandbox.notify( "join" );
  }

  return {
    init: function() {
      sandbox.log.debug( "module::navbar::init()" );
      _joinButton = sandbox.find( "#register" );
      _joinButton.bind( "click", _notifyActionCallback );
    },
    destroy: function() {
      sandbox.log.debug( "navbar::destroy()" );
    }
  };

}

module.exports = moduleNavbar;
