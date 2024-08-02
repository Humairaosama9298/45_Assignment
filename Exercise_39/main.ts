// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


// Exercise_39

function city_country (city:string, country:string):string{
    return `${city},${country}`;
};

console.log(city_country("Colombo","srilanka"));
console.log(city_country("Paris","France"));
console.log(city_country("Dhaka","Bangladesh"));