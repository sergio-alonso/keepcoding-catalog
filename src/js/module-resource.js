function moduleResource (sandbox) {
  'use strict'

  var log = 'module::resource::'
  var api = 'http://' + window.location.host + '/api'
  var url = api + '/comments'
  var items
  var form

  var onInit = function () {
    sandbox.log.debug(log + 'onInit()')

    sandbox.subscribe('msg-showed-article', onShowArticle)

    sandbox.find(document).submit(onSubmit)
  }

  var onDestroy = function () {
    sandbox.log.debug(log + 'onDestroy()')
  }

  var onSubmit = function (e) {
    form = sandbox.find(e.target)
    if (form.is('#comment-form')) {
      e.preventDefault()
      sandbox.saveData(url, form.serialize())
      sandbox.log.warn(log + 'onLoadData() Load only current item')
      sandbox.loadData(url, onLoadData)
    }
  }

  var loadItem = function (item, index) {
    sandbox.create('<li/>', { class: 'item', text: item.comment }).appendTo(items)
  }

  var onLoadData = function (data) {
    sandbox.find('.items').remove()
    items = sandbox.create('<ul/>', { class: 'items' })
    data.forEach(loadItem)
    sandbox.find('#detail-comments').append(items)
  }

  var onShowArticle = function () {
    sandbox.log.debug(log + 'onShowArticle()')

    sandbox.find('#comment').textareaCounter({ limit: 120 })

    sandbox.loadData(url, onLoadData)
  }

  return {
    init: onInit,
    destroy: onDestroy
  }
}

module.exports = moduleResource
