require('lightgallery.js');
require('lg-thumbnail.js');
require('lg-zoom.js');
require('lg-hash.js');
require('lg-fullscreen.js');

$('document').ready(function(){
  var lg = document.getElementById('lightgallery');
  lightGallery(lg, {
    thumbnail:true
  });
});
