function scrollInfinite() {
  if ($(document).height() - $(window).height() == $(window).scrollTop()) {
    $.ajax({
      url: 'resources.html',
      dataType: 'html',
      success: function(html) {
        var data = $(html);
        $('.scroll-infinite').masonry().append(data).masonry('appended', data);
      },
      error: function() {
        console.log("error...");
      }
    });
  }
}

$(document).ready(function() {
  $(window).scroll(scrollInfinite);
});
