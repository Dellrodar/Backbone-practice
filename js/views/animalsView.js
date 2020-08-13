define([
  'jquery',
  'underscore',
  'backbone',
  'collections/animals',
  'models/animal',
  'views/animalView'],
  function ($, _, Backbone, Animal, Animals, AnimalView) {
    var AnimalsView = Backbone.View.extend({
      tagName: "ul",
      className: "animals",

      initialize: function () {
        this.model.on("add", this.onAnimalAdded, this);
        this.model.on("remove", this.onAnimalRemoved, this);
      },

      onAnimalAdded: function (animal) {
        var animalView = new animalView({ model: animal });
        this.$el.append(animalView)
      },

      onAnimalRemoved: function (animal) {
        this.$el.find("#li" + animal.id).remove();
      },

      render: function () {
        var self = this;

        this.model.each(function (animal) {
          var animalView = new AnimalView({ model: animal });
          self.$el.append(animalView.render().$el);
        });
      }
    });
    return AnimalsView;
  });