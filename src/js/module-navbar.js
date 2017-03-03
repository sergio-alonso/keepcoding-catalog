function moduleNavbar( sandbox ) {
  "use strict";

  var _log = "module::navbar::",
      _joinButton,
      _joinButtonIcon,
      _loginButton,
      _loginButtonIcon;

  var onInit = function() {
    sandbox.log.debug( _log + "onInit()" );

    _joinButton = sandbox.find( "#register" );
    _joinButton.bind( "click", _onJoinButtonClick );

    _joinButtonIcon = sandbox.find( "#register > span.glyphicon" );
    _setJoinButtonStyle();

    _loginButton = sandbox.find( "#login" );
    _loginButton.bind( "click", _onLoginButtonClick );

    _loginButtonIcon = sandbox.find( "#login > span.glyphicon" );
    _setLoginButtonStyle();

    sandbox.subscribe( "msg-join-submit", _onJoinSubmitMessage );
    sandbox.subscribe( "msg-login-submit", _onLoginSubmitMessage );
  };

  var onDestroy = function() {
    sandbox.log.debug( _log + "onDestroy()" );
  };

  var _onJoinButtonClick = function() {
    sandbox.log.debug( _log + "_onJoinButtonClick()" );

    if ( sandbox.isUserJoined() ) {
      _logout();
      sandbox.removeUserAccount();
      _setJoinButtonStyle();
    } else {
      sandbox.notify( "msg-join-request" );
    }
  };

  var _onLoginButtonClick = function() {
    sandbox.log.debug( _log + "_onLoginButtonClick()" );

    if ( sandbox.isUserLoged() ) {
      _logout();
    } else if ( sandbox.isUserJoined() ) {
      sandbox.notify( "msg-login-request" );
      sandbox.log.warn( _log + "not implemented yet" );
    } else {
      sandbox.notify( "msg-join-request" );
    }
  };

  var _onJoinSubmitMessage = function( data ) {
    sandbox.log.debug( _log + "_onJoinSubmitMessage()", data );

    sandbox.store( "user", data );

    _setJoinButtonStyle();

    sandbox.notify( "msg-login-submit", data );
  };

  var _onLoginSubmitMessage = function( data ) {
    sandbox.log.debug( _log + "_onLoginSubmitMessage()", data );

    sandbox.session( "user", data );

    _setLoginButtonStyle();
  };

  var _logout = function() {
    sandbox.log.debug( _log + "_onLogout()" );

    sandbox.removeUserSession();

    _setLoginButtonStyle();
  };

  var _setLoginButtonStyle = function() {
    _loginButtonIcon.toggleClass( "glyphicon-log-out", sandbox.isUserLoged() );
  };

  var _setJoinButtonStyle = function() {
    _joinButtonIcon.toggleClass( "glyphicon-minus", sandbox.isUserJoined() );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };

}

module.exports = moduleNavbar;
