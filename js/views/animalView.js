define([
  'jquery',
  'underscore',
  'backbone',
  'models/animal'
],
  function ($, _, Backbone, Animal) {
    var animalView = Backbone.View.extends({

      render: function () {
        var template = _.template($("#songTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html);
        this.$el.attr("id", this.model.id);
        return this;
      }
    });
    return AnimalView;
  });
