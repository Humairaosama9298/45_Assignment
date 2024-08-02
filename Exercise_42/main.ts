// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Exercise_41

let magicianNames: string[] = ["Mariya", "Hamza", "Sana"];

function show_magicians(magicianNames: string[]) {
  magicianNames.forEach((names) => {
    console.log(names);
  });
}

// Exercise_42

// modified add phrase 
function make_great(magicianNames: string[]) {
  magicianNames.forEach((names) => {
    console.log(`The Great ${names}`);
  });
}
make_great(magicianNames);
show_magicians(magicianNames);
