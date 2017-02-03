var url = "http://" + location.host + "/db";
var comments = $('<ul/>', {class: "comments"});

function loadComment(i, item) {
  var comment = $('<li/>',{class: 'comment', text: item.comment}).appendTo(comments);
}

function loadComments(data) {
  $.each(data.comments, loadComment);
  $('#detail-comments').append(comments);
}

function loadData() {
  $.getJSON(url, loadComments);
}
