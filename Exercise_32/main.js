// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Exercise_32
let current_users = [
    "Orhan",
    "Sehar",
    "Sana",
    "faryal",
    "osama",
    "ariba",
];
let new_users = ["Huma", "Kiran ", "Faryal", "Ariba", "Asma"];
// use foreach function
new_users.forEach((new_users_name) => {
    let lowerCase = new_users_name.toLocaleLowerCase();
    if (current_users.map((current_user) => current_user.toLowerCase()).includes(lowerCase)) {
        console.log(`Username ${new_users_name} is not available. Plaese enter new user name.`);
    }
    else {
        console.log(`Username ${new_users_name} is available.`);
    }
});
export {};
