function moduleCTA( sandbox ) {
  "use strict";

  var _emailField,
      _joinButton,
      _anonymousButton;

  function onInit() {
    sandbox.log.debug( "module::cta::onInit()" );

    _joinButton = sandbox.find( "#join-cta" );
    _joinButton.bind( "click", _onJoinButtonClick );

    _anonymousButton = sandbox.find( "#join-anonymous" );
    _anonymousButton.bind( "click", _onAnonymousButtonClick );
  }

  function onDestroy() {
    sandbox.log.debug( "module::cta::onDestroy()" );
  }

  function _onJoinButtonClick() {
    sandbox.log.debug( "module::cta::_onjoinButtonClick()" );

    _emailField = sandbox.find( "#email-cta" );

    sandbox.removeError( "#email-cta" );

    if ( false === sandbox.isValid( _emailField.val(), "email-rule" ) ) {
      sandbox.showError( "#email-cta", "¿Seguro que este es tu correo?" );
      return;
    }

    sandbox.log.warn( "module::cta One time password email must be sent to " +
                      "<" + _emailField.val() + ">" );
    sandbox.notify( "msg-join-submit" );
  }

  function _onAnonymousButtonClick() {
    sandbox.log.debug( "module::cta::_onAnonymousButtonClick()" );

    sandbox.notify( "msg-join-anonymous" );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleCTA;
