function extensionForm( core ) {
  "use strict";

  var _patterns = {
      "email-rule": /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      "password-rule": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
  };

  var onInit = function() {
    core.log.debug( "extension::form::init()" );
    core.form = this;
    core.sandbox.form = this;
  };

  var isValid = function( field, rule ) {
    if ( typeof _patterns[ rule ] === "undefined" ) {
      console.error( "extension::form::isValid() unknow rule='" + rule + "'" );
      return false;
    }

    if ( field.match( _patterns[ rule ] ) === null ) {
      return false;
    }

    return true;
  };

  core.sandbox.isValid = function( field, rule ) {
    return isValid( field, rule );
  };

  return {
    init: onInit,
    isValid: isValid
  };

}

module.exports = extensionForm;
