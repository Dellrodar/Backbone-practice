define([
  'jquery',
  'underscore',
  'backbone',
  'routers/appRouter',
], function ($, _, Backbone, AppRouter) {
  var NavView = Backbone.View.extend({

    events: {
      "click": "onClick"
    },

    onClick: function(e){
      var $li = $(e.target);
      router.navigate($li.attr("data-url"), { trigger: true });
    }
  });
  return NavView;
});

