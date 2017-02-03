var url = "http://" + location.host + "/db";
var url_comments = "http://" + location.host + "/comments";
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


function saveComment(comment) {
  jQuery.ajax({
    type: "POST",
    url: url_comments,
    dataType: 'json',
    data: comment,
    success: function (data) {
      alert("Comment saved");
    }
  });
}

function onSubmit(event) {
  var form = jQuery(event.target);
  if (form.is("#comment-form")) {
    event.preventDefault();
    saveComment(form.serialize());
  }
}


function saveData() {
  jQuery(document).submit(onSubmit);
}
