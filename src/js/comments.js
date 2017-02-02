var url = "http://" + location.host + "/db";
var comments = $('<ul/>', {class: "comments"});

function loadComment(i, item) {
  console.log(item.comment);
  var comment = $('<li/>',{class: 'comment', text: item.comment}).appendTo(comments);
}

function loadComments(data) {
  $.each(data.comments, loadComment);
  $('#detail-comments').append(comments);
  console.log($('#detail-comments'));
}

function loadData() {
  $.getJSON(url, loadComments);
}
