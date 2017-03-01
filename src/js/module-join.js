var moduleJoin = function (sandbox) {
  'use strict';

  var _joinButton;

  function _joinButtonCallback() {
    sandbox.log.debug("module::join::_joinButtonCallback()");
    sandbox.notify('join-submit');
  }

  function _showModalCallback() {
    sandbox.log.debug("module::join::_showModalCallback()");
    _joinButton = sandbox.find('#join-btn');
    _joinButton.bind('click', _joinButtonCallback);
  }

  function _hideModalCallback() {
    sandbox.log.debug("module::join::_hideModalCallback()");
    _joinButton.unbind('click');
  }

  var _onJoinEvent = function() {
    sandbox.log.debug("module::join::_onJoinEvent()");
    sandbox.showModal('#register-view','register.html', _showModalCallback, _hideModalCallback);
  };

  return {
    init: function() {
      sandbox.log.debug("module::join::init()");
      sandbox.subscribe([
        "join"
      ], _onJoinEvent);
    },
    destroy: function() {
      sandbox.log.debug.debug("module::join::destroy()");
    }
  };

};

module.exports = moduleJoin;
