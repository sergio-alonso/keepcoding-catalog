function extensionStorage (core) {
  'use strict'

  var log = 'extension::storage::'

  var onInit = function () {
    core.log.debug(log + 'onInit()')

    if (typeof Storage === 'undefined') {
      // TODO: Handle this error
      core.log.error(log + 'onInit() No HTML5 Storage Support')
    }

    core.storage = this
  }

  var onDestroy = function () {
    core.log.debug(log + 'onDestroy()')
  }

  var store = function (object, data) {
    core.log.debug(log + 'store()', data)

    window.localStorage.setItem(object, JSON.stringify(data))
  }

  var session = function (object, data) {
    core.log.debug(log + 'session()', data)

    window.sessionStorage.setItem(object, JSON.stringify(data))
  }

  core.sandbox.store = function (object, data) {
    store(object, data)
  }

  core.sandbox.session = function (object, data) {
    session(object, data)
  }

  // I'm using the Web Storage Api to mock user handler, but
  // TODO: move to another place

  // Return true if user has been joined
  core.sandbox.isUserJoined = function () {
    return window.localStorage.hasOwnProperty('user')
  }

  // Return true if user has been loged
  core.sandbox.isUserLoged = function () {
    return window.sessionStorage.hasOwnProperty('user')
  }

  core.sandbox.removeUserAccount = function () {
    window.localStorage.removeItem('user')
  }

  core.sandbox.removeUserSession = function () {
    window.sessionStorage.removeItem('user')
  }

  core.sandbox.like = function (id) {
    var count = window.localStorage.getItem(id)
    count++
    window.localStorage.setItem(id, count)
  }

  return {
    init: onInit,
    destroy: onDestroy,
    store: store,
    session: session
  }
}

module.exports = extensionStorage
