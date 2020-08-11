// Our first Collection. A Collection is a group of Models. It is extended from Backbone.Collection
var Songs = Backbone.Collection.extend({
  model: Song
});

// New Songs to add to our collection
var songs = new Songs([
  new Song({ id: 1, title: "Drowning in my code" }),
  new Song({ id: 2, title: "Coffee is love and life" }),
  new Song({ id: 3, title: "Java made the code go down" })
]);