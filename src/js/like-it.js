function incrementLike(id) {
  var count = localStorage.getItem(id);
  count++;
  localStorage.setItem(id, count);
}

$(".pin-icon").click(function (e) {
  e.stopPropagation();
  // console.log($(this).attr("resource-id"));
  incrementLike($(this).attr("resource-id"));
});
