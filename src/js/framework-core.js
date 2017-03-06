var Sandbox = require('./framework-sandbox')

var extensionLog = require('./extension-log')
var extensionDom = require('./extension-dom')
var extensionMsg = require('./extension-msg')
var extensionForm = require('./extension-form')
var extensionStorage = require('./extension-storage')
var extensionScrollInfinite = require('./extension-scroll-infinite')
var extensionAjax = require('./extension-ajax')
var extensionScrollToTop = require('./extension-scroll-to-top')
var extensionDate = require('./extension-date')
var extensionWordCounter = require('./extension-word-counter')
var extensionJson = require('./extension-json')

var moduleNavbar = require('./module-navbar')
var moduleCTA = require('./module-call-to-action')
var moduleJoin = require('./module-join')
var moduleLogin = require('./module-login')
var moduleSearchResult = require('./module-search-result')
var moduleArticle = require('./module-article')
var moduleResource = require('./module-resource')

var Core = (function () {
  'use strict'

  var modules = {}
  var extensions = {}
  var sandbox = new Sandbox(this)

  var register = function (module, creator) {
    console.log("core::register() module='" + module + "'")
    modules[ module ] = {
      creator: creator,
      instance: null
    }
  }

  var start = function (module) {
    console.log("core::start module='" + module + "'")
    modules[ module ].instance = modules[ module ].creator(sandbox)
    modules[ module ].instance.init()
  }

  var stop = function (module) {
    if (modules[ module ].instance) {
      modules[ module ].instance.destroy()
      modules[ module ].instance = null
    }
  }

  var startAll = function () {
    var module
    for (module in modules) {
      this.start(module)
    }
  }

  var use = function (extension, creator) {
    extensions[ extension ] = {
      creator: creator,
      instance: undefined
    }
  }

  var load = function (extension) {
    if (typeof extensions[ extension ].instance !== 'undefined') {
      console.log("core::load() extension='" + extension + "' already loaded")
      return
    }

    extensions[ extension ].instance = extensions[ extension ].creator(this)
    extensions[ extension ].instance.init()
  }

  var loadAll = function () {
    var extension
    for (extension in extensions) {
      this.load(extension)
    }
  }

  var boot = function () {
    this.use('log', extensionLog)
    this.use('dom', extensionDom)
    this.use('msg', extensionMsg)
    this.use('form', extensionForm)
    this.use('storage', extensionStorage)
    this.use('scroll', extensionScrollInfinite)
    this.use('ajax', extensionAjax)
    this.use('scroll-to-top', extensionScrollToTop)
    this.use('date', extensionDate)
    this.use('word-counter', extensionWordCounter)
    this.use('json', extensionJson)

    // TODO: add extension dependencies, instead of load in order
    this.load('log')
    this.loadAll()

    this.register('navbar', moduleNavbar)
    this.register('cta', moduleCTA)
    this.register('join', moduleJoin)
    this.register('login', moduleLogin)
    this.register('search-result', moduleSearchResult)
    this.register('article', moduleArticle)
    this.register('resource', moduleResource)

    this.startAll()
  }

  return {
    sandbox: sandbox,
    use: use,
    load: load,
    loadAll: loadAll,
    boot: boot,
    register: register,
    start: start,
    stop: stop,
    startAll: startAll
  }
})()

module.exports = Core
