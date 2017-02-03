function showResource(event) {
    $("#detail-view").modal({
      remote: 'detail.html'
    });
    loadData();
    saveData();
}

$(document).ready(function(){
  $('.resource').on('click', showResource)
});
