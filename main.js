function createJsonFeed(resolution) {
  json = {
    get: 'user',
    userId: '2956328096',
    clientId: '252adee577c54290b95bce5e0402d743',
    accessToken: '2956328096.252adee.1236d11b36674de19e2208bfb4f9a4fe',
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
