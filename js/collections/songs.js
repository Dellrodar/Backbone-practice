define([
  'underscore',
  'backbone',
  'models/song'],
  function (_, Backbone, Song) {
    // Our first Collection. A Collection is a group of Models. It is extended from Backbone.Collection
    var Songs = Backbone.Collection.extend({
      model: Song
    });
    return Songs;
  });


