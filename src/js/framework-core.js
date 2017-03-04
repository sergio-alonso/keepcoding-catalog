var Sandbox = require( "./framework-sandbox" );

var extensionLog = require( "./extension-log" );
var extensionDom = require( "./extension-dom" );
var extensionMsg = require( "./extension-msg" );
var extensionForm = require( "./extension-form" );
var extensionStorage = require( "./extension-storage" );
var extensionScrollInfinite = require( "./extension-scroll-infinite" );
var extensionAjax = require( "./extension-ajax" );
var extensionScrollToTop = require( "./extension-scroll-to-top" );

var moduleNavbar = require( "./module-navbar" );
var moduleCTA = require( "./module-call-to-action" );
var moduleJoin = require( "./module-join" );
var moduleLogin = require( "./module-login" );
var moduleSearchResult = require( "./module-search-result" );

var Core = ( function() {
  "use strict";

  var _modules = {},
      _extensions = {},
      sandbox = new Sandbox( this );

  var register = function( module, creator ) {
    console.log( "core::register() module='" + module + "'" );
    _modules[ module ] = {
      creator: creator,
      instance: null
    };
  };

  var start = function( module ) {
    console.log( "core::start module='" + module + "'" );
    _modules[ module ].instance = _modules[ module ].creator( sandbox );
    _modules[ module ].instance.init();
  };

  var stop = function( module ) {
    if ( _modules[ module ].instance ) {
      _modules[ module ].instance.destroy();
      _modules[ module ].instance = null;
    }
  };

  var startAll = function() {
    var module;
    for ( module in _modules ) {
      this.start( module );
    }
  };

  var use = function( extension, creator ) {
    _extensions[ extension ] = {
      creator: creator,
      instance: undefined
    };
  };

  var load = function( extension ) {
    if ( typeof _extensions[ extension ].instance !== "undefined" ) {
      console.log( "core::load() extension='" + extension + "' already loaded" );
      return;
    }

    _extensions[ extension ].instance = _extensions[ extension ].creator( this );
    _extensions[ extension ].instance.init();
  };

  var loadAll = function() {
    var extension;
    for ( extension in _extensions ) {
      this.load( extension );
    }
  };

  var boot = function() {
    this.use( "log", extensionLog );
    this.use( "dom", extensionDom );
    this.use( "msg", extensionMsg );
    this.use( "form", extensionForm );
    this.use( "storage", extensionStorage );
    this.use( "scroll", extensionScrollInfinite );
    this.use( "ajax", extensionAjax );
    this.use( "scroll-to-top", extensionScrollToTop );

    // TODO: add extension dependencies, instead of load in order
    this.load( "log" );
    this.loadAll();

    this.register( "navbar", moduleNavbar );
    this.register( "cta", moduleCTA );
    this.register( "join", moduleJoin );
    this.register( "login", moduleLogin );
    this.register( "search-result", moduleSearchResult );

    this.startAll();
  };

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
  };

} )();

module.exports = Core;
