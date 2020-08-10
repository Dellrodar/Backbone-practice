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

// Our first Collection. A Collection is a group of Models. It is extended from Backbone.Collection
var Songs = Backbone.Collection.extend({
  model: Song
});

// New Songs to add to our collection
var songs = new Songs([
  new Song({ id: 1, title: "Drowning in my code" }),
  new Song({ id: 2, title: "Coffee is love and life" }),
  new Song({ id: 3, title: "Java made the code go down" })
]);

// Songs can be added using the ".add()" function. Each new song will require an title based on our validation.
songs.add(new Song({ id: 4, title: "This is only a test." }));
songs.add(new Song({ id: 5, title: "Gaining a backbone", genre: "Rock", downloads: 9001 }), { at: 0 });

// ".push" can also be used to add songs.
songs.push(new Song({ id: 6, title: "Gaining the knowledge...", genre: "Classical", downloads: 100 }));

// ".where" can be used to find all songs with the genre of Jazz on the page.
var jazzSongs = songs.where({ genre: "Jazz" });

// ".findWhere" will find the first item the matches the genre
var firstJazzSong = songs.findWhere({ genre: "Jazz" });

// returning each function
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

  initialize: function () {
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
    var template = _.template($("#songTemplate").html());
    var html = template(this.model.toJSON());
    this.$el.html(html + " - Listeners: " + this.model.get("listeners"));
    this.$el.attr("id", this.model.id);
    return this;
  }
});

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

var songView = new SongView({ el: "#song", model: song });
songView.render();

// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView.render();


//combined example
// $("#container").html(songView.render().$el);

// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.