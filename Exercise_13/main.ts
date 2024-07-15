// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Exercise_13

// array
let favrit_transport:string[] = ["Civic","City","Corola","BMW","Ferrari"];

// solve with foreach function
favrit_transport.forEach((transport) => {
    console.log(`"I Would like to own a ${transport}."`);  
});
