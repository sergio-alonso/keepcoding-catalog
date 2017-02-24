function incrementLike(id) {
  var count = localStorage.getItem(id);
  count++;
  localStorage.setItem(id, count);
}

function removeFromPage(id) {
  $(".masonry-container").masonry('remove', $('#'+id)).masonry('layout');
}

$(document).ready(function(){
  $(".pin-icon").click(function (e) {
    e.stopPropagation();
    incrementLike($(this).attr("resource-id"));
    removeFromPage($(this).attr("resource-id"));
  });
});
