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

  var removeError = function( selector ) {
    var field = find( selector );

    field.prev( "div.textError" )
    .remove()
    .end();
  };

  var showError = function( selector, message ) {
    var field = find( selector ),
        error = "<div class='textError'>" + message + "</div>" ;

    removeError( selector );
    field.before( error );
  };

  // Extend the sandbox
  core.sandbox.find = function( selector ) {
    return find( selector );
  };

  core.sandbox.showModal = function( selector, remote, showCallback, hideCallback ) {
    showModal( selector, remote, showCallback, hideCallback );
  };

  core.sandbox.showError = function( selector, message ) {
    showError( selector, message );
  };

  core.sandbox.removeError = function( selector ) {
    removeError( selector );
  };

  return {
    init: init,
    find: find
  };
}

module.exports = coreDom;
