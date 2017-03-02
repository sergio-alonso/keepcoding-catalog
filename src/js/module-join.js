var moduleJoin = function( sandbox ) {
  "use strict";

  var _emailField;
  var _passwordField;
  var _joinButton;

  function onInit() {
    sandbox.log.debug( "module::join::onInit()" );

    sandbox.subscribe( [
      "msg-join-request"
    ], _onJoinEvent );
  }

  function onDestroy() {
    sandbox.log.debug( "module::join::destroy()" );
  }

  function _joinButtonCallback() {
    sandbox.log.debug( "module::join::_joinButtonCallback()" );

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

      // TODO: encrypt password before store
      sandbox.notify( "msg-join-submit",
                      { email:_emailField.val(), password:_passwordField.val() } );
    }
  }

  function _showModalCallback() {
    sandbox.log.debug( "module::join::_showModalCallback()" );

    _joinButton = sandbox.find( "#join-btn" );
    _joinButton.bind( "click", _joinButtonCallback );
  }

  function _hideModalCallback() {
    sandbox.log.debug( "module::join::_hideModalCallback()" );

    _joinButton.unbind( "click" );
  }

  function _onJoinEvent() {
    sandbox.log.debug( "module::join::_onJoinEvent()" );

    sandbox.showModal( "#register-view", "modal-register.html",
                       _showModalCallback, _hideModalCallback );
  }

  return {
    init: onInit,
    destroy: onDestroy
  };

};

module.exports = moduleJoin;
