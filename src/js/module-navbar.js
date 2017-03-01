function moduleNavbar( sandbox ) {
  "use strict";

  var _joinButton;

  function onInit() {
    sandbox.log.debug( "module::navbar::onInit()" );

    _joinButton = sandbox.find( "#register" );
    _joinButton.bind( "click", _onJoinButtonClick );

    sandbox.subscribe( [
      "msg-join-submit"
    ], _onJoinSubmitMessage );
  }

  function onDestroy() {
    sandbox.log.debug( "module::navbar::onDestroy()" );
  }

  function _onJoinButtonClick() {
    sandbox.log.debug( "module::navbar::_onJoinButtonClick()" );

    sandbox.notify( "join" );
  }

  function _onJoinSubmitMessage() {
    sandbox.log.debug( "module::navbar::_onJoinSubmitMessage()" );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleNavbar;
