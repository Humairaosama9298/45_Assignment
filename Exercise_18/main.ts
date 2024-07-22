// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



// Exercise_18

// store location in array 
let locations:string[] = ["Switzerland","Canada","Paris","Iskardu","Tokyo"];

// Print your array in its original order.
console.log("Orignal array:" , locations);

//  Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order Array:" , locations.slice().sort());

// orignal array
console.log("Orignal array:" , locations);

// Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order Array:" , locations.slice().reverse());

// orignal array
console.log("Orignal array:", locations);

// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log("Reverse Order Array:",locations);

//  Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log("Orignal Array:",locations);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

locations.sort();
console.log("Alphabetical Order Array:", locations);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

locations.reverse();
console.log("Reverse Alphbetical Order Array:",locations);
