var extensionWordCounter = function( core ) {
  "use strict";

  var _log = "extension::word-counter::";

  var onInit = function() {
    core.log.debug( _log + "onInit()" );
  };

  var onDestroy = function() {
    core.log.debug( _log + "onDestroy()" );
  };

  $.fn.textareaCounter = function( opt ) {

    var obj = $( this );

    core.log.debug( _log + "textareaCounter() ", obj );

    var defaults = { limit: 100 },
        options = $.extend( defaults, opt );

    var text,
        wordcount,
        limited;

    obj.after( "<span style='font-size: 11px; clear: both; margin-top: 3px; display: block;'" +
               "id='counter-text'>Max. " + options.limit + " words</span>" );

    obj.keyup( function() {

      text = obj.val();
      
      if ( text === "" ) {
        wordcount = 0;
      } else {
        wordcount = $.trim( text ).match( /[^ ]+/g ).length;
      }

      if ( wordcount > options.limit ) {
        $( "#counter-text" ).html( '<span style="color: #DD0000;">0 words left</span>' );
        limited = $.trim( text ).substring( 0, $.trim( text ).length - 2 );
        $( this ).val( limited );
      } else {
        $( "#counter-text" ).html( ( options.limit - wordcount ) + " words left" );
      }
    } );
    
  };

  core.sandbox.textareaCounter = function( obj, opt ) {

    //R textareaCounter( obj, opt );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };
};

module.exports = extensionWordCounter;
