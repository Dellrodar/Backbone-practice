define([
  'jquery',
  'underscore',
  'Backbone',
  'views/animalsView',
  'views/songsView'],
  function ($, _, Backbone, SongsView, AnimalsView) {
    var AppRouter = Backbone.Router.extend({
      routes: {
        "songs": "viewSongs",
        "animals": "viewAnimals",
        "persons": "viewPersons",
        "*other": "defaultRoute"
      },

      viewSongs: function () {
        var view = new SongsView({ el: "#switchContainer" });
        view.render();
      },

      viewAnimals: function () {
        var view = new AnimalsView({ el: "#switchContainer" });
        view.render();
      },

      viewPersons: function () {

      },

      defaultRoute: function () {

      },
    });
    return AppRouter;
  });
