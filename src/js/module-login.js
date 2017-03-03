var moduleLogin = function( sandbox ) {
  "use strict";

  var _log = "module::login::",
      _emailField,
      _passwordField,
      _loginButton;

  function onInit() {
    sandbox.log.debug( _log + "onInit()" );

    sandbox.subscribe( [
      "msg-login-request"
    ], _onLoginEvent );
  }

  function onDestroy() {
    sandbox.log.debug( _log + "destroy()" );
  }

  function _loginButtonCallback() {
    sandbox.log.debug( _log + "_loginButtonCallback()" );

    _emailField = sandbox.find( "#login-email" );
    _passwordField = sandbox.find( "#login-password" );

    var valid = true;

    if ( false === sandbox.isValid( _emailField.val(), "email-rule" ) ) {
      sandbox.showError( "#login-email", "¿Seguro que este es tu correo?" );
      valid = false;
    } else {
      sandbox.removeError( "#login-email" );
    }

    if ( false === sandbox.isValid( _passwordField.val(), "password-rule" ) ) {
      sandbox.showError( "#login-password", "Poco segura, usa, mayusculas, minusculas y numeros." );
      valid = false;
    } else {
      sandbox.removeError( "#login-password" );
    }

    if ( valid ) {
      sandbox.hideModal( "#login-view" );

      sandbox.log.warn( _log + "_loginButtonCallback() password must be encrypted before store" );
      sandbox.notify( "msg-login-submit",
                      { email:_emailField.val(), password:_passwordField.val() } );
    }
  }

  function _showModalCallback() {
    sandbox.log.debug( _log + "_showModalCallback()" );

    _loginButton = sandbox.find( "#login-btn" );
    _loginButton.bind( "click", _loginButtonCallback );
  }

  function _hideModalCallback() {
    sandbox.log.debug( _log + "_hideModalCallback()" );

    _loginButton.unbind( "click" );
  }

  function _onLoginEvent() {
    sandbox.log.debug( _log + "_onLoginEvent()" );

    sandbox.showModal( "#login-view", "modal-login.html",
                       _showModalCallback, _hideModalCallback );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

};

module.exports = moduleLogin;
