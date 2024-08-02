// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Exercise_41
let magicianNames = ["Mariya", "Hamza", "Sana"];
function show_magicians(magicianNames) {
    magicianNames.forEach((names) => {
        console.log(names);
    });
}
show_magicians(magicianNames);
export {};
