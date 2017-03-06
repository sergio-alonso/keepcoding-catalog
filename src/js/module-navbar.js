function moduleNavbar (sandbox) {
  'use strict'

  var log = 'module::navbar::'
  var joinButton
  var joinButtonIcon
  var loginButton
  var loginButtonIcon

  var onInit = function () {
    sandbox.log.debug(log + 'onInit()')

    joinButton = sandbox.find('#register')
    joinButton.bind('click', onJoinButtonClick)

    joinButtonIcon = sandbox.find('#register > span.glyphicon')
    setJoinButtonStyle()

    loginButton = sandbox.find('#login')
    loginButton.bind('click', onLoginButtonClick)

    loginButtonIcon = sandbox.find('#login > span.glyphicon')
    setLoginButtonStyle()

    sandbox.subscribe('msg-join-submit', onJoinSubmitMessage)
    sandbox.subscribe('msg-login-submit', onLoginSubmitMessage)
  }

  var onDestroy = function () {
    sandbox.log.debug(log + 'onDestroy()')
  }

  var onJoinButtonClick = function () {
    sandbox.log.debug(log + 'onJoinButtonClick()')

    if (sandbox.isUserJoined()) {
      logout()
      sandbox.removeUserAccount()
      setJoinButtonStyle()
    } else {
      sandbox.notify('msg-join-request')
    }
  }

  var onLoginButtonClick = function () {
    sandbox.log.debug(log + 'onLoginButtonClick()')

    if (sandbox.isUserLoged()) {
      logout()
    } else if (sandbox.isUserJoined()) {
      sandbox.notify('msg-login-request')
      sandbox.log.warn(log + 'not implemented yet')
    } else {
      sandbox.notify('msg-join-request')
    }
  }

  var onJoinSubmitMessage = function (data) {
    sandbox.log.debug(log + 'onJoinSubmitMessage()', data)

    sandbox.store('user', data)

    setJoinButtonStyle()

    sandbox.notify('msg-login-submit', data)
  }

  var onLoginSubmitMessage = function (data) {
    sandbox.log.debug(log + 'onLoginSubmitMessage()', data)

    sandbox.session('user', data)

    setLoginButtonStyle()
  }

  var logout = function () {
    sandbox.log.debug(log + 'onLogout()')

    sandbox.removeUserSession()

    setLoginButtonStyle()
  }

  var setLoginButtonStyle = function () {
    loginButtonIcon.toggleClass('glyphicon-log-out', sandbox.isUserLoged())
  }

  var setJoinButtonStyle = function () {
    joinButtonIcon.toggleClass('glyphicon-minus', sandbox.isUserJoined())
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = moduleNavbar
