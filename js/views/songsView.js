define([
  'jquery',
  'underscore',
  'backbone',
  'collections/songs',
  'models/song',
  'views/songView'],
  function ($, _, Backbone, Song, Songs, SongView) {
    var SongsView = Backbone.View.extend({
      tagName: "ul",
      className: "songs",

      initialize: function () {
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
      },

      onSongAdded: function (song) {
        var songView = new songView({ model: song });
        this.$el.append(songView)
      },

      onSongRemoved: function (song) {
        this.$el.find("#li" + song.id).remove();
      },

      render: function () {
        var self = this;

        this.model.each(function (song) {
          var songView = new SongView({ model: song });
          self.$el.append(songView.render().$el);
        });
      }
    });
    return SongsView;
  });

