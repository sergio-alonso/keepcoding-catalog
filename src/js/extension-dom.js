function coreDom( core ) {
  "use strict";

  var init = function() {
    core.log.debug( "extension::dom::init()" );
    // Extend the core
    core.dom = this;
  };

  var find = function( selector ) {
    core.log.debug( "extension::dom::find() selector='" + selector + "'" );
    var found = $( selector );
    //Core.log.debug(found);
    return found;
  };

  var showModal = function( selector, remote, showCallback, hideCallback ) {
    var element = find( selector );

    element
    .one( "shown.bs.modal", showCallback )
    .one( "hide.bs.modal", hideCallback )
    .modal( {
      remote: remote
    } );

  };

  // Extend the sandbox
  core.sandbox.find = function( selector ) {
    //Core.log.debug("sandbox::extension::dom::find() selector='" + selector + "'");
    return find( selector );
  };

  core.sandbox.showModal = function( selector, remote, showCallback, hideCallback ) {
    showModal( selector, remote, showCallback, hideCallback );
  };

  return {
    init: init,
    find: find
  };
}

module.exports = coreDom;
