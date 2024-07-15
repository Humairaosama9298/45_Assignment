// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Exercise_16
let friend_name = ["Asma", "Sana", "Erum", "Hira"];
// inform for bigger dinner table
for (let i = 0; i < friend_name.length; i++) {
    console.log(`"Hey ${friend_name[i]}! We've got a bigger table now, so let's gather more people and make it a party!"`);
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
    console.log(`"Hey ${name}! I invite you for dinner and make it a party!"`);
});
console.log(`\n\n\t***Exercise_17***\n\n`);
// Exercise_17
console.log("i can invite only two people for dinner\n");
// print sorry msg for remove guest list
let removeGuest = friend_name.splice(2);
removeGuest.forEach((guest) => {
    console.log(`${guest},I am sorry I can’t invite you for dinner.`);
});
// print msg for left guest list
let leftGuest = friend_name.slice(0, 2);
leftGuest.forEach((guest) => {
    console.log(`"${guest},you are invitd for dinner."`);
});
// print empty array
console.log(friend_name = []);
friend_name.splice(0, friend_name.length);
console.log(friend_name); // Shows an empty list
export {};
