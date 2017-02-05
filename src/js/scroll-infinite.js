function scrollInfinite() {
  if ($(document).height() - $(window).height() == $(window).scrollTop()) {
    $.ajax({
      url: 'index-next.html',
      dataType: 'html',
      success: function(html) {
        var data = $(html);
        $('.scroll-infinite').append(data).masonry('appended', data, true);
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
