function extensionDate (core) {
  'use strict'

  var log = 'extension::date::'

  var onInit = function () {
    core.log.debug(log + 'onInit()')

    window.moment.updateLocale('es', {
      calendar: {
        lastWeek: 'dddd',
        sameElse: 'D MMM YYYY'
      }
    })

    core.date = this
  }

  var onDestroy = function () {
    core.log.debug(log + 'onDestroy()')
  }

  var getRelativeDate = function (date) {
    var past = window.moment(date)
    var diff = window.moment().diff(past, 'seconds')

    if (diff < 0) {
      return past.calendar()
    } else if (diff < 60) {
      return diff + ' segundos'
    } else if (diff < 3600) {
      return past.fromNow()
    } else if (diff < 86400) {
      return past.fromNow()
    } else {
      return past.calendar()
    }
  }

  core.sandbox.getRelativeDate = function (i, e) {
    return getRelativeDate(i, e)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = extensionDate
