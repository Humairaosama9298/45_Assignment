// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Exercise_45

function make_Car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car: { [key: string]: any } = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

let car1 = make_Car(
  "Ford",
  "Mustang",
  ["Color", "Black"],
  ["Year", 2022],
  ["Engine", "5.0L"]
);
let car2 = make_Car("Honda", "Civic", ["Color", "Silver"], ["Year", 2020]);
let car3 = make_Car("Nissan", "Altima", ["Color", "White"], ["Year", 2021]);

console.log(car1);
console.log(car2);
console.log(car3);
