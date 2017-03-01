var Sandbox = require( "./framework-sandbox" );
var extensionDom = require( "./extension-dom" );
var moduleNavbar = require( "./module-navbar" );
var moduleJoin = require( "./module-join" );

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
      instance: null
    };
  };

  var load = function( extension ) {
    _extensions[ extension ].instance = _extensions[ extension ].creator( this );
    _extensions[ extension ].instance.init();
  };

  var boot = function() {
    this.use( "dom", extensionDom );

    // TODO: add extension dependencies, instead of load in order
    this.load( "log" );
    this.load( "dom" );
    this.load( "msg" );
    this.register( "navbar", moduleNavbar );
    this.register( "join", moduleJoin );
    this.startAll();
  };

  return {
    sandbox: sandbox,
    use: use,
    load: load,
    boot: boot,
    register: register,
    start: start,
    stop: stop,
    startAll: startAll
  };

} )();

module.exports = Core;
