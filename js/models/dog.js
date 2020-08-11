define([
  'underscore',
  'backbone',
  'models/animal'],
  function (_, Backbone, Animal) {
    var Dog = Animal.extend({
      walk: function () {
        Animal.prototype.walk.apply(this);
        console.log("The Dog is walking...");
      }
    });
    return Dog;
  });

