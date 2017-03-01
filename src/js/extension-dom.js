function coreDom(core) {
  'use strict';

  var init = function () {
    core.log.debug("extension::dom::init()");
    // extend the core
    core.dom = this;
  };

  var find = function(selector) {
    core.log.debug("extension::dom::find() selector='" + selector + "'");
    var found = $(selector);
    //core.log.debug(found);
    return found;
  };

  var showModal = function(selector, remote, showCallback, hideCallback) {
    var element = find(selector);

    element
    .one('shown.bs.modal', showCallback)
    .one('hide.bs.modal', hideCallback)
    .modal({
      remote: remote
    });

  };

  // extend the sandbox
  core.sandbox.find = function(selector) {
    //core.log.debug("sandbox::extension::dom::find() selector='" + selector + "'");
    return find(selector);
  };

  core.sandbox.showModal = function(selector, remote, showCallback, hideCallback) {
    showModal(selector, remote, showCallback, hideCallback);
  };

  return {
    init: init,
    find: find
  };
}

module.exports = coreDom;
