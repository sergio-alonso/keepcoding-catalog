function incrementLike(id) {
  var count = localStorage.getItem(id);
  count++;
  localStorage.setItem(id, count);
}

function removeFromPage(id) {
  $(".masonry-container").masonry('remove', $('#'+id)).masonry('layout');
  $.ajax({
    url: 'resource.html',
    dataType: 'html',
    success: function(html) {
      var data = $(html);
      $('.masonry-container').masonry().append(data).masonry('appended', data);
    },
    error: function() {
      console.log("error...");
    }
  });
}

$(document).ready(function(){
  $(".pin-icon").click(function (e) {
    e.stopPropagation();
    incrementLike($(this).attr("resource-id"));
    removeFromPage($(this).attr("resource-id"));
  });
});
