var person = {
  name: "Emilio",

// Event -  "trigger" will trigger a backbone js event.
  walk: function () {
    this.trigger("walking", {
      speed: 1,
      startTime: "08:00"
    })
  }
};

// calls the backbone events, extends the Backbone.events to the person
_.extend(person, Backbone.Events);

//subbing to events
  person.on("walking", function (e){
  console.log("Person is walking...");
  console.log("Event Args", e);
});
// "once" sub to the event only once.
// person.once("walking", function (e){
//   console.log("Person is walking...");
//   console.log("Event Args", e);
// });

//unsubscribes from events
person.off("Walking");

//calling walk
person.walk();