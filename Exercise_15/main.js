// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Exercise_14
// array
let friend_name = ["Asma", "Sana", "Erum", "Nabeela"];
//print message for invitaition using for of loop
for (let friend of friend_name) {
    console.log(`Hey ${friend}," want to grab dinner together today? Let me know when you're free!"`);
}
console.log("\n\n\t****Exercise_15****\n\n");
// Exercise_15
let noAttndDinner = "Nabeela";
console.log(`${noAttndDinner} cant make dinner.`);
// replacing friend name who cant make it with new friend
console.log((friend_name[3] = "Hira"));
// print a second set of invitaition using foreach method
friend_name.forEach((name) => {
    console.log(`Hey ${name},"I was thinking of trying out a new restaurant for dinner and would love for you to join me! Interested?"`);
});
export {};
