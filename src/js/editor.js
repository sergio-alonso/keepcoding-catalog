require('tagmanager');

$(document).ready(function(){
  $("#tm-input").tagmanager({
  });

  $('#tm-input').data('tagmanager').create('TagA', false);
  $('#tm-input').data('tagmanager').create('TagB', false);
  $('#tm-input').data('tagmanager').create('TagC', false);
});

