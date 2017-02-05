(function () {
var updateRelativeDates = function() {
  $('time').each(function (i, e) {
    if ($(e).attr("class") == 'relative-date') {

      // Initialise momentjs
      var now = moment();
      moment.lang('es', {
        calendar : {
          lastWeek : 'dddd',
          sameElse : 'D MMM YYYY'
        }
      });

      // Grab the datetime for the element and compare to now                    
      var time = moment($(e).attr('datetime'));
      var diff = now.diff(time, 'seconds');
      
      if (diff >=-1 && diff < 59) {
        $(e).html('<span>' + diff + ' segundos</span>');
      } else if (diff < 3600) {
        $(e).html('<span>' + time.fromNow() + '</span>');
      } else if (diff < 86400) {
        $(e).html('<span>' + time.fromNow() + '</span>');
      } else {
        $(e).html('<span>' + time.calendar() + '</span>');
      }
    }
  });
};

  // Update all dates initially
  updateRelativeDates();

  // Register the timer to call it again every minute
  setInterval(updateRelativeDates, 60000);

})();
