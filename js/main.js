var Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created.")
  },
  defaults: {
    downloads: 0,
    genre: "Jazz",
    listeners: 0
  },
  validate: function (attrs) {
    if (!attrs.title)
      return "Title is required.";
  }
});
var Songs = Backbone.Collection.extend({
  model: Song
});

var songs = new Songs([
  new Song({ title: "Drowning in my code" }),
  new Song({ title: "Coffee is love and life" }),
  new Song({ title: "Java made the code go down" })
]);

songs.add(new Song({ title: "This is only a test." }));
songs.add(new Song({ title: "Gaining a backbone", genre: "Rock", downloads: 9001 }), { at: 0 });

songs.push(new Song({ title: "Gaining the knowledge...", genre: "Classical", downloads: 100 }));

var jazzSongs = songs.where({ genre: "Jazz" });
var firstJazzSong = songs.findWhere({ genre: "Jazz" });

console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Drowning in my code" });
console.log("Filtered Songs", filteredSongs);

var topDownloads = songs.filter(function (song) {
  return song.get("downloads") > 100;
})

console.log("Top Downloads", topDownloads);

songs.each(function (song) {
  console.log(song);
})

var song = new Song({
  title: "Blue in Green",
  artist: "Miles Davis",
  publishYear: 1959
});

var lastError = song.validationError;

var Animal = Backbone.Model.extend({
  walk: function () {
    console.log("The Animal is walking...");
  }
})

var Dog = Animal.extend({
  walk: function () {
    Animal.prototype.walk.apply(this);
    console.log("The Dog is walking...");
  }
});

var dog = new Dog();

dog.walk();

var SongView = Backbone.View.extend({
  tagName: "li",
  className: "song",

  initialize: function() {
    this.model.on("change", this.render, this);
  },
  events: {
    "click": "onClick",
    "click .bookmark": "onClickBookmark",
  },
  onClick: function () {
    song.set("listeners", 1)
    console.log("Listen CLicked");
  },
  onClickBookmark: function (e) {
    e.stopPropagation();
    console.log("Bookmark Clicked")
  },
  render: function () {
    this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark'>Bookmark</button>" + " - Listeners: " + this.model.get("listeners"));
    return this;
  }
});

var SongsView = Backbone.View.extend({
  tagName: "ul",

  initialize: function() {
    this.model.on("add", this.onSongAdded, this);
    this.model.on("remove", this.onSongRemoved, this);
  },

  onSongAdded: function(song) {
    var songView = new songView({ model: song });
    this.$el.append(songView)
  },

  onSongRemoved: function () {
    this.$("li#" + song.id).remove();
  },

  render: function () {
    var self = this;

    this.model.each(function (song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
});

var songView = new SongView({ el: "#song", model: song});
songView.render();

var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();


//combined example
// $("#container").html(songView.render().$el);

// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.