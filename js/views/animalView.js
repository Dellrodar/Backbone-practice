define([
  'jquery',
  'underscore',
  'backbone',
  'models/animal'
],
  function ($, _, Backbone, Animal) {
    var AnimalView = Backbone.View.extend({

      tagName: "li",
      className: "animal",

      initialize: function () {
        this.model.on("change", this.render, this);
      },

      events: {
        "click .listen": "onClickListener",
      },

      incrementWalk: function (e) {
        e.stopPropagation();
        console.log("We're going on a walk...");
        this.model.incrementWalk();
        this.render();
      },

      render: function () {
        var template = _.template($("#animalTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html + " Walks today: " + this.model.get("walks"));
        this.$el.attr("id", this.model.id);
        return this;
      }
    });
    return AnimalView;
  });
