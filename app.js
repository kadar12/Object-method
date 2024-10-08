console.log("Hello World!");

const person = {
  name: "Kadar",
  age: 31,
  favouriteColour: "Blue",
  getAge: function () {
    return person.age;
  },
};

const age = person.getAge();
console.log(age);

const car = {
  make: "suzuki",
  model: "SX4",
  colour: "blue",
  advert: function () {
    return car;
  },
};

console.log(car);
