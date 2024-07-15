// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Exercise_15

let friend_name: string[] = ["Asma", "Sana", "Erum", "Nabeela"];

let noAttndDinner: string = "Nabeela";
console.log(`${noAttndDinner} cant make dinner.`);

// replacing friend name who cant make it with new friend
console.log((friend_name[3] = "Hira"));

// print a second set of invitaition using foreach method
friend_name.forEach((name) => {
  console.log(
    `Hey ${name},"I was thinking of trying out a new restaurant for dinner and would love for you to join me! Interested?"`
  );
});

console.log(`\t\n\n***Exercise_16***\n\n`);

// Exercise_16

// inform for bigger dinner table
for (let i = 0; i < friend_name.length; i++) {
  console.log(
    `"Hey ${friend_name[i]}! We've got a bigger table now, so let's gather more people and make it a party!"`
  );
}

// add new guest in begining
friend_name.unshift("Amna");

// add new guest in middle
friend_name.splice(3, 0, "Hina");

// add new guest in end
friend_name.push("Madiha");

console.log("\n\nAfter Adding Guest\n\n");

// print new set of invitaition
friend_name.forEach((name) => {
  console.log(
    `"Hey ${name}! I invite you for dinner and make it a party!"`
  );
});
