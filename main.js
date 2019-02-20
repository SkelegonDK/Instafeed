function createJsonFeed(resolution) {
  json = {
    get: 'user',
    userId: '**',
    clientId: '**',
    accessToken: '**',
    resolution: resolution,
    limit: 4,
    template: '<a href="{{link}}">' +
      '<div class="post-container">' +
      '<img class="' + resolution + '" src="{{image}}" />' +
      '</div>' +
      '</a>'
  };
  console.log(json);
  return json;
}
// render feed
function renderFeed(resolution) {
  var json = createJsonFeed(resolution);
  var feed = new Instafeed(json);
  console.log(feed);
  feed.run();
}
renderFeed('standard_resolution');
