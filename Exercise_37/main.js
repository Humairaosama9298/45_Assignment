// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Exercise_37
// write function
function make_shirt(size, message = "I Love Typescript") {
    console.log(`Making a ${size} Shirt and mesaage print on it ${message}.`);
}
;
make_shirt("Small");
make_shirt("Medium");
make_shirt("Large", "I Love Pakistan");
export {};
