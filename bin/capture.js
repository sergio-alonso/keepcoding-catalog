var page = require('webpage').create();
page.viewportSize = { width: 1280, height: 1024 };
page.open('http://localhost:3000/page-landing.html', function() {
  page.render('public/page-landing-lg.png');
  phantom.exit();
});

/*
var page_landing_xs = require('webpage').create();
page_landing_xs.viewportSize = { width: 375, height: 667 };
page_landing_xs.open('http://localhost:3000/page-landing.html', function() {
  page_landing_xs.render('public/page-landing-xs.png');
  phantom.exit();
});
*/