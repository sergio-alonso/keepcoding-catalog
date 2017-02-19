require('tagmanager');

$(document).ready(function(){
  if($("#tm-input").length <= 0) {return;}
  $("#tm-input").tagmanager({});

  $('#tm-input').data('tagmanager').create('TagA', false);
  $('#tm-input').data('tagmanager').create('TagB', false);
  $('#tm-input').data('tagmanager').create('TagC', false);

  $('#edit-title').focus();
});

