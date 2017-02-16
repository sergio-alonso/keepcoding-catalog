var page = require('webpage').create();
page.viewportSize = { width: 1280, height: 1024 };
page.open('http://localhost:3000/page-landing.html', function() {
  page.render('public/page-landing.png');
  phantom.exit();
});

