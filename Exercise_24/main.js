// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Exercise_24
let cat = "CAT";
let fifty = 50;
// Tests for equality and inequality with strings
// test for equality
console.log(`Equality : cat == "CAT"`);
console.log(cat == "CAT");
// test for inequality
console.log(`Inquality : cat == "dog"`);
console.log(cat == "dog");
// Tests using the lower case function
// test for equality
console.log(`Equality : cat.toLowerCase() == "cat"`);
console.log(cat.toLowerCase() == "cat");
// test for inequality
console.log(`Inquality : cat.toLowerCase() == "CAT"`);
console.log(cat.toLowerCase() == "CAT");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Test fro equality
console.log(`Equality : fifty == 50`);
console.log(fifty == 50);
// Test for inequality
console.log(`Inequality : fifty == 60`);
console.log(fifty == 60);
// greater than
console.log(`Greater than : fifty > 49`);
console.log(fifty > 49);
// less than
console.log(`less than : fifty < 50`);
console.log(fifty < 50);
// greater than or equal to
console.log(`Greater than or equal to : fifty <= 50`);
console.log(fifty <= 50);
// less than or equal to
console.log(`less than or equal to : fifty >= 100`);
console.log(fifty >= 100);
// Tests using "and"  "or" operators
// Test for equality
console.log(`Equality : fifty == 50 && cat == "CAT"`);
console.log(fifty == 50 && cat == "CAT");
// Test for inequality
console.log(`Inequality : fifty == 50 && cat == "cat"`);
console.log(fifty == 50 && cat == "cat");
// Test using "or" operators
// Test for equality
console.log(`Equality : fifty != 50 || cat == "CAT"`);
console.log(fifty != 50 || cat == "CAT");
// Test for inequality
console.log(`Inequality : fifty > 50 || cat == "cat"`);
console.log(fifty > 50 || cat == "cat");
// • Test whether an item is in a array
let fruits = ["Orange", "Cherry", "Watermelon", "falsa"];
console.log(`["Orange", "Cherry", "Watermelon", "falsa"],\n "Is Orange in a Array ? `);
if (fruits.indexOf("Orange") == 0) {
    console.log(true);
}
else {
    console.log(false);
}
// • Test whether an item is not in a array
console.log(`["Orange", "Cherry", "Watermelon", "falsa"],\n "Is Banana in a Array ? `);
if (fruits.indexOf("Banana") == 0) {
    console.log(true);
}
else {
    console.log(false);
}
export {};
