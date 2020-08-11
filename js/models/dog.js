var Dog = Animal.extend({
  walk: function () {
    Animal.prototype.walk.apply(this);
    console.log("The Dog is walking...");
  }
});