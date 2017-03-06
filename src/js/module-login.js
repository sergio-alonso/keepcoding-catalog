var moduleLogin = function (sandbox) {
  'use strict'

  var log = 'module::login::'
  var emailField
  var passwordField
  var loginButton

  function onInit () {
    sandbox.log.debug(log + 'onInit()')

    sandbox.subscribe([
      'msg-login-request'
    ], onLoginEvent)
  }

  function onDestroy () {
    sandbox.log.debug(log + 'destroy()')
  }

  function loginButtonCallback () {
    sandbox.log.debug(log + 'loginButtonCallback()')

    emailField = sandbox.find('#login-email')
    passwordField = sandbox.find('#login-password')

    var valid = true

    if (sandbox.isValid(emailField.val(), 'email-rule') === false) {
      sandbox.showError('#login-email', '¿Seguro que este es tu correo?')
      valid = false
    } else {
      sandbox.removeError('#login-email')
    }

    if (sandbox.isValid(passwordField.val(), 'password-rule') === false) {
      sandbox.showError('#login-password', 'Poco segura, usa, mayusculas, minusculas y numeros.')
      valid = false
    } else {
      sandbox.removeError('#login-password')
    }

    if (valid) {
      sandbox.hideModal('#login-view')

      sandbox.log.warn(log + 'loginButtonCallback() password must be encrypted before store')
      sandbox.notify('msg-login-submit',
                      { email: emailField.val(), password: passwordField.val() })
    }
  }

  function showModalCallback () {
    sandbox.log.debug(log + 'showModalCallback()')

    loginButton = sandbox.find('#login-btn')
    loginButton.bind('click', loginButtonCallback)
  }

  function hideModalCallback () {
    sandbox.log.debug(log + 'hideModalCallback()')

    loginButton.unbind('click')
  }

  function onLoginEvent () {
    sandbox.log.debug(log + 'onLoginEvent()')

    sandbox.showModal('#login-view', 'modal-login.html',
                       showModalCallback, hideModalCallback)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = moduleLogin
