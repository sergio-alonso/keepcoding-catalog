var moduleArticle = function( sandbox ) {
  "use strict";

  var log = "module::article::",
      id,
      article,
      pinIcon;

  var onInit = function() {
    sandbox.log.debug( log + "oninit()" );

    article = sandbox.find( ".resource" );
    article.bind( "click", onArticleClick );

    pinIcon = sandbox.find( ".pin-icon" );
    pinIcon.bind( "click", onPinIconClick );
  };

  var onDestroy = function() {
    sandbox.log.debug( log + "onDestroy()" );
  };

  var onPinIconClick = function( event ) {
    sandbox.log.warn( log + "onPinIconClick() check if user is loged in" );

    event.stopPropagation();

    id = sandbox.find( this ).attr( "resource-id" );

    sandbox.like( id );
    sandbox.notify( "msg-like-article", { id: id } );
  };

  var onArticleClick = function( event ) {
    sandbox.log.debug( log + "onArticleClick()" );

    id = sandbox.find( this ).attr( "resource-id" );

    sandbox.notify( "msg-show-article", { id: id } );
  };

  return {
    init: onInit,
    destroy: onDestroy
  };

};

module.exports = moduleArticle;
