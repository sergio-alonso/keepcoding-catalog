function extensionAjax (core) {
  'use strict'

  var _log = 'extension::ajax::'

  var onInit = function () {
    core.log.debug(_log + 'onInit()')
  }

  var onDestroy = function () {
    core.log.debug(_log + 'onDestroy()')
  }

  var onRequest = function (url, callback) {
    core.log.debug(_log + 'onRequest() ' + url, callback)

    $.ajax({
      url: url,
      dataType: 'html',
      success: callback.success,
      error: callback.failure
    })
  }

  core.sandbox.request = function (url, callback) {
    onRequest(url, callback)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = extensionAjax
