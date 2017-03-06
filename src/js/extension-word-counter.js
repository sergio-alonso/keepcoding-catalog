var extensionWordCounter = function (core) {
  'use strict'

  var log = 'extension::word-counter::'

  var onInit = function () {
    core.log.debug(log + 'onInit()')
  }

  var onDestroy = function () {
    core.log.debug(log + 'onDestroy()')
  }

  $.fn.textareaCounter = function (options) {
    var obj = core.dom.find(this)

    core.log.debug(log + 'textareaCounter() ', obj)

    // var defaults = { limit: 100 }
    // var options = $.extend(defaults, opt)

    var text
    var wordcount
    var limited

    obj.after("<span style='font-size: 11px; clear: both; margin-top: 3px; display: block;'" +
               "id='counter-text'>Max. " + options.limit + ' words</span>')

    obj.keyup(function () {
      text = obj.val()

      if (text === '') {
        wordcount = 0
      } else {
        wordcount = text.trim().match(/[^ ]+/g).length
      }

      if (wordcount > options.limit) {
        core.dom.find('#counter-text').html('<span style="color: #DD0000;">0 words left</span>')
        limited = text.trim().substring(0, text.trim().length - 2)
        core.dom.find(this).val(limited)
      } else {
        core.dom.find('#counter-text').html((options.limit - wordcount) + ' words left')
      }
    })
  }

  core.sandbox.textareaCounter = function (obj, opt) {

    // R textareaCounter( obj, opt );
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = extensionWordCounter
