define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  var Animal = Backbone.Model.extend({
    initialize: function () {
      console.log("A new Animal is here!");
    },

    defaults: {
      walks: 0,
    },

    walk: function () {
      console.log("The Animal is walking...");
    }
  })
  return Animal;
})



