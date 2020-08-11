var SongsView = Backbone.View.extend({
  tagName: "ul",

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