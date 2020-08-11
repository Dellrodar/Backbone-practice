define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  var Animal = Backbone.Model.extend({
    walk: function () {
      console.log("The Animal is walking...");
    }
  })
  return Animal;
})



