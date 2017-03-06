function extensionScrollToTop (core) {
  'use strict'

  var log = 'extension::scroll-to-top::'
  var w
  var scrollToTop

  var onInit = function () {
    core.log.debug(log + 'onInit()')

    w = core.dom.find(window)
    w.scroll(onScroll)

    scrollToTop = core.dom.find('.scroll-to-top')
    scrollToTop.bind('click', onClick)
  }

  var onDestroy = function () {
    core.log.debug(log + 'onDestroy()')
  }

  var onScroll = function () {
    if (w.scrollTop() > 100) {
      scrollToTop.fadeIn()
    } else {
      scrollToTop.fadeOut()
    }
  }

  var onClick = function () {
    core.dom.find('html, body').animate({ scrollTop: 0 }, 600)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = extensionScrollToTop
