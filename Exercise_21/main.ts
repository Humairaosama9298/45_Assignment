// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Exercise_21

// store in object

type MyData = {
  name: String;
  fatherName: String;
  age: Number;
  rollNumber: Number;
};
let myData: MyData = {
  name: "Humaira",
  fatherName: "Yaseen Shah",
  age: 31,
  rollNumber: 78755,
};
console.log(`My name is ${myData.name}.\nMy Father name is ${myData.fatherName}.\nMy age is ${myData.age}.\nMy Roll number is ${myData.rollNumber}. `);
