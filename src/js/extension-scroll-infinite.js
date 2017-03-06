function extensionScrollInfinite (core) {
  'use strict'

  var log = 'extension::scroll-infinite::'
  var window
  var doc

  var onInit = function () {
    core.log.debug(log + 'onInit()')

    doc = core.dom.find(document)

    core.log.warn(log + 'onInit() link scroll to window instead of module?')
    window = core.dom.find(window)

    core.scroll = this
  }

  var onDestroy = function () {
    core.log.debug(log + 'onDestroy()')
  }

  var infinite = function (callback) {
    if (doc.height() - window.height() === window.scrollTop()) {
      callback()
    }
  }

  core.sandbox.infiniteScroll = function (callback) {
    window.scroll(function () {
      infinite(callback)
    })
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = extensionScrollInfinite
