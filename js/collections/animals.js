define([
  'underscore',
  'backbone',
  'model/animal'],
  function (_, Backbone, Animal) {
    var Animals = Backbone.Collections.extends({
      Model: Animal
    });
    return Animals;
  });

