var moduleJoin = function (sandbox) {
  'use strict'

  var log = 'module::join::'
  var emailField
  var passwordField
  var joinButton

  function onInit () {
    sandbox.log.debug(log + 'onInit()')

    sandbox.subscribe([
      'msg-join-request'
    ], onJoinEvent)
  }

  function onDestroy () {
    sandbox.log.debug(log + 'destroy()')
  }

  function joinButtonCallback () {
    sandbox.log.debug(log + 'joinButtonCallback()')

    emailField = sandbox.find('#email')
    passwordField = sandbox.find('#password')

    var valid = true

    if (sandbox.isValid(emailField.val(), 'email-rule') === false) {
      sandbox.showError('#email', '¿Seguro que este es tu correo?')
      valid = false
    } else {
      sandbox.removeError('#email')
    }

    if (sandbox.isValid(passwordField.val(), 'password-rule') === false) {
      sandbox.showError('#password', 'Poco segura, usa, mayusculas, minusculas y numeros.')
      valid = false
    } else {
      sandbox.removeError('#password')
    }

    if (valid) {
      sandbox.hideModal('#register-view')

      sandbox.log.warn(log + 'joinButtonCallback() password must be encrypted before store')
      sandbox.notify('msg-join-submit',
                      { email: emailField.val(), password: passwordField.val() })
    }
  }

  function showModalCallback () {
    sandbox.log.debug(log + 'showModalCallback()')

    joinButton = sandbox.find('#join-btn')
    joinButton.bind('click', joinButtonCallback)
  }

  function hideModalCallback () {
    sandbox.log.debug(log + 'hideModalCallback()')

    joinButton.unbind('click')
  }

  function onJoinEvent () {
    sandbox.log.debug(log + 'onJoinEvent()')

    sandbox.showModal('#register-view', 'modal-register.html',
                       showModalCallback, hideModalCallback)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = moduleJoin
