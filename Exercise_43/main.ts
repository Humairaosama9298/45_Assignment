// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Exercise_43

let magiciansName: string[] = ["Sana", "Faryal", "Hamza", "Saima"];

function show_magicians(magiciansName: string[]) {
  magiciansName.forEach((name) => {
    console.log(name);
  });
}

function make_great(magiciansName: string[]): string[] {
  return magiciansName.map(name => `The Great ${name}`);
}
// copy array store in new array
let copyMagicianNames = make_great(magiciansName.slice());

console.log("Orignal Magicians:\n");
show_magicians(magiciansName);
console.log("\nGreat Magicians:\n");
show_magicians(copyMagicianNames);
