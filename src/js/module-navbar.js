function moduleNavbar( sandbox ) {
  "use strict";

  var _joinButton,
      _loginButton,
      _loginButtonIcon;

  function onInit() {
    sandbox.log.debug( "module::navbar::onInit()" );

    _joinButton = sandbox.find( "#register" );
    _joinButton.bind( "click", _onJoinButtonClick );

    _loginButton = sandbox.find( "#login" );
    _loginButton.bind( "click", _onLoginButtonClick );

    _loginButtonIcon = sandbox.find( "#login > span.glyphicon" );

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

  function _onJoinSubmitMessage( data ) {
    sandbox.log.debug( "module::navbar::_onJoinSubmitMessage()", data );

    sandbox.store( "user", data );

    _joinButton.remove();
    sandbox.notify( "msg-login-submit", data );
  }

  function _onLoginButtonClick() {
    sandbox.log.debug( "module::navbar::_onLoginButtonClick()" );
  }

  function _onLoginSubmitMessage( data ) {
    sandbox.log.debug( "module::navbar::_onLoginSubmitMessage()", data );

    sandbox.session( "user", data );

    _loginButtonIcon.toggleClass( "glyphicon-log-out" );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleNavbar;
