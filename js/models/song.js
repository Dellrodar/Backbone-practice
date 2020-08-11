define([
  'underscore',
  'backbone'
],
  function (_, Backbone) {
    // Making our first Model. We extend Backbone.Model
    var Song = Backbone.Model.extend({
      // Runs once a Model is initialized.
      initialize: function () {
        console.log("A new song has been created.")
      },
      // Default attributes set to each Song Model created
      defaults: {
        downloads: 0,
        genre: "Jazz",
        listeners: 0
      },
      // Validation function to ensure each new Song has a title.
      validate: function (attrs) {
        if (!attrs.title)
          return "Title is required.";
      }
    });
      return Song;
  });



