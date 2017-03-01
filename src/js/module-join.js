var moduleJoin = function( sandbox ) {
  "use strict";

  var _emailField;
  var _passwordField;
  var _joinButton;

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
      sandbox.notify( "msg-join-submit" );
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

  var _onJoinEvent = function() {
    sandbox.log.debug( "module::join::_onJoinEvent()" );
    sandbox.showModal( "#register-view", "modal-register.html",
                       _showModalCallback, _hideModalCallback );
  };

  return {
    init: function() {
      sandbox.log.debug( "module::join::init()" );
      sandbox.subscribe( [
        "join"
      ], _onJoinEvent );
    },
    destroy: function() {
      sandbox.log.debug.debug( "module::join::destroy()" );
    }
  };

};

module.exports = moduleJoin;
