define([
  'underscore',
  'backbone',
  'models/song',
  'views/songView'
], function (_, Backbone, Song, SongView) {

  var initialize = function () {
    var song = new Song({
      title: "Blue in Green",
      artist: "Miles Davis",
      publishYear: 1959
    });

    var lastError = song.validationError;

    var songView = new SongView({ el: "#song", model: song });
    songView.render();

  }

  return {
    initialize: initialize
  };

})

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

var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();


var dog = new Dog();

dog.walk();