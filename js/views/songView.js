define([
  'jquery',
  'underscore',
  'backbone',
  'models/song'
],
 function($, _, Backbone, Song) {
  // Our first View for the Song Model
var SongView = Backbone.View.extend({
  tagName: "li",
  className: "song",

  // Subscribes to changes
  initialize: function () {
    this.model.on("change", this.render, this);
  },

  // event listeners. One for onClick and another for the bookmark button
  events: {
    "click .listen": "onClickListener",
    "click .download": "onClickDownload",
  },

  //This will listen to all click events
  onClickListener: function (e) {
    e.stopPropagation();
    console.log("Listen Clicked");
    this.model.incrementListener();
    this.render();
  },

  // events bubble up. using stop propagation will ensure only the bookmark event runs
  onClickDownload: function (e) {
    e.stopPropagation();
    console.log("Bookmark Clicked")
    this.model.incrementDownload();
    this.render();
  },

  // renders to a template script made in index.js
  render: function () {
    var template = _.template($("#songTemplate").html());
    var html = template(this.model.toJSON());
    this.$el.html(html + " - Listeners: " + this.model.get("listeners"));
    this.$el.attr("id", this.model.id);
    return this;
  }
});
  return SongView;
})



//combined example
// $("#container").html(songView.render().$el);