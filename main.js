var x = window.matchMedia("(min-width: 600px)");
var y = window.matchMedia("(max-width: 300px)");
var z = window.matchMedia("(min-width: 1200px)");
function createJsonFeed(resolution) {
  json = {
    get: 'user',
    userId: '21006150',
    clientId: '7632d49c1e574c8dbc295e75e5313962',
    accessToken: '21006150.1677ed0.fbbf233a65d34bc1a0ace57fb6c31aa9',
    resolution: resolution,
    limit: 4,
    template: '<a href="{{link}}">' +
      '<div class="post-container">' +
      '<img class="high-res-img" src="{{image}}" />' +
      '</div>' +
      '</a>'
  }
  return json
}




myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener fu

function myFunction(x) {
  if (x.matches) { // If media query matches
    var json = createJsonFeed('thumbnail');
    var feed = new Instafeed(json);
  } if (y.matches) {
    var json = createJsonFeed('thumbnail');
    var feed = new Instafeed(json);
  } if (z.matches) {
    var json = createJsonFeed('thumbnail');
    var feed = new Instafeed(json);
  }
  else {
    console.log("error");
  }
  feed.run();
}
