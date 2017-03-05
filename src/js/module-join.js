var moduleJoin = function( sandbox ) {
  "use strict";

  var _log = "module::join::",
      _emailField,
      _passwordField,
      _joinButton;

  function onInit() {
    sandbox.log.debug( _log + "onInit()" );

    sandbox.subscribe( [
      "msg-join-request"
    ], _onJoinEvent );
  }

  function onDestroy() {
    sandbox.log.debug( _log + "destroy()" );
  }

  function _joinButtonCallback() {
    sandbox.log.debug( _log + "_joinButtonCallback()" );

    _emailField = sandbox.find( "#email" );
    _passwordField = sandbox.find( "#password" );

    var valid = true;

    if ( false === sandbox.isValid( _emailField.val(), "email-rule" ) ) {
      sandbox.showError( "#email", "¿Seguro que este es tu correo?" );
      valid = false;
    } else {
      sandbox.removeError( "#email" );
    }

    if ( false === sandbox.isValid( _passwordField.val(), "password-rule" ) ) {
      sandbox.showError( "#password", "Poco segura, usa, mayusculas, minusculas y numeros." );
      valid = false;
    } else {
      sandbox.removeError( "#password" );
    }

    if ( valid ) {
      sandbox.hideModal( "#register-view" );

      sandbox.log.warn( _log + "_joinButtonCallback() password must be encrypted before store" );
      sandbox.notify( "msg-join-submit",
                      { email:_emailField.val(), password:_passwordField.val() } );
    }
  }

  function _showModalCallback() {
    sandbox.log.debug( _log + "_showModalCallback()" );

    _joinButton = sandbox.find( "#join-btn" );
    _joinButton.bind( "click", _joinButtonCallback );
  }

  function _hideModalCallback() {
    sandbox.log.debug( _log + "_hideModalCallback()" );

    _joinButton.unbind( "click" );
  }

  function _onJoinEvent() {
    sandbox.log.debug( _log + "_onJoinEvent()" );

    sandbox.showModal( "#register-view", "modal-register.html",
                       _showModalCallback, _hideModalCallback );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

};

module.exports = moduleJoin;
