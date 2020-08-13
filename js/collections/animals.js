define([
  'underscore',
  'backbone',
  'models/animal'],
  function (_, Backbone, Animal) {
    var Animals = Backbone.Collection.extend({
      model: Animal
    });
    return Animals;
  });

