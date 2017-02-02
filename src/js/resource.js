$(document).ready(function(){
  $('.resource').on('click', function(e) {
     $("#detail-view").modal({
       remote: 'detail.html'
     });
    loadData();
  });
});
