define([
  'underscore',
  'backbone',
  'views/navView',
  'models/song',
  'views/songView',
  'collections/songs',
  'views/songsView',
  'models/animal',
  'views/animalView',
  'collections/animals',
  'views/animalsView',
  'models/dog',
  'routers/appRouter'],

  function (_, Backbone, NavView, Song, SongView, Songs, SongsView, Animal, AnimalView, Animals, AnimalsView, Dog, AppRouter) {

    var initialize = function () {

      var navView = new NavView({ el: "#nav" });
      // var song = new Song({
      //   title: "Blue in Green",
      //   artist: "Miles Davis",
      //   publishYear: 1959
      // });

      // var lastError = song.validationError;

      //SONG FUNCTIONS
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
      });

      // var songsView = new SongsView({ el: "#switchContainer", model: songs});
      // songsView.render();

      //ANIMAL FUNCTIONS
      //Animals Collection
      var animals = new Animals([
        new Animal({ id: 1, name: "Cat" }),
        new Animal({ id: 2, name: "Parrot" }),
        new Animal({ id: 3, name: "Alligator" })
      ]);

      // var animalsView = new AnimalsView({ el: "#switchContainer", model: animals });
      // animalsView.render();

      var dog = new Dog();

      dog.walk();

      var router = new AppRouter();
      Backbone.history.start();

    };

    return {
      initialize: initialize
    };

  });