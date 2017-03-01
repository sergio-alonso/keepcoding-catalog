function moduleNavbar( sandbox ) {
  "use strict";

  var _joinButton;

  function onInit() {
    sandbox.log.debug( "module::navbar::onInit()" );

    _joinButton = sandbox.find( "#register" );
    _joinButton.bind( "click", _onJoinButtonClick );

    sandbox.subscribe( "msg-join-submit", _onJoinSubmitMessage );
    sandbox.subscribe( "msg-login-submit", _onLoginSubmitMessage );
  }

  function onDestroy() {
    sandbox.log.debug( "module::navbar::onDestroy()" );
  }

  function _onJoinButtonClick() {
    sandbox.log.debug( "module::navbar::_onJoinButtonClick()" );

    sandbox.notify( "msg-join-request" );
  }

  function _onJoinSubmitMessage() {
    sandbox.log.debug( "module::navbar::_onJoinSubmitMessage()" );

    _joinButton.remove();
    sandbox.notify( "msg-login-submit" );
  }

  function _onLoginSubmitMessage() {
    sandbox.log.debug( "module::navbar::_onLoginSubmitMessage()" );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleNavbar;
