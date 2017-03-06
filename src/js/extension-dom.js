function extensionDom (core) {
  'use strict'

  var init = function () {
    core.log.debug('extension::dom::init()')

    // Extend the core
    core.dom = this
  }

  var find = function (selector) {
    var found = $(selector)

    return found
  }

  var create = function (element, options) {
    return $(element, options)
  }

  var showModal = function (selector, remote, showCallback, hideCallback) {
    var element = find(selector)

    element
    .one('shown.bs.modal', showCallback)
    .one('hide.bs.modal', hideCallback)
    .modal({
      remote: remote
    })
  }

  var hideModal = function (selector) {
    var element = find(selector)

    element
    .modal('hide')
  }

  var removeError = function (selector) {
    var field = find(selector)

    field.prev('div.textError')
    .remove()
    .end()
  }

  var showError = function (selector, message) {
    var field = find(selector)
    var error = "<div class='textError'>" + message + '</div>'

    removeError(selector)
    field.before(error)
  }

  // Extend the sandbox
  core.sandbox.find = function (selector) {
    return find(selector)
  }

  core.sandbox.create = function (element, options) {
    return create(element, options)
  }

  core.sandbox.showModal = function (selector, remote, showCallback, hideCallback) {
    showModal(selector, remote, showCallback, hideCallback)
  }

  core.sandbox.hideModal = function (selector) {
    hideModal(selector)
  }

  core.sandbox.showError = function (selector, message) {
    showError(selector, message)
  }

  core.sandbox.removeError = function (selector) {
    removeError(selector)
  }

  return {
    init: init,
    find: find
  }
}

module.exports = extensionDom
