/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here with two parameters...
var calculateAge = function(birthYear, currentYear) {
    var vege = currentYear - birthYear;
    console.log("You are either " + (vege-1) +" or " + vege);
};
console.log(calculateAge(1967, 2015));
console.log(calculateAge(1965, 2015));
console.log(calculateAge(1970, 2015));

// write your solution here with one parameters...
var calculateAgeOne = function(birthYear) {
    var currentYear = new Date();
    var vege = currentYear.getFullYear() - birthYear;
    console.log("You are either " + (vege-1) +" or " + vege);
};
console.log(calculateAgeOne(1967, 2015));
console.log(calculateAgeOne(1965, 2015));
console.log(calculateAgeOne(1970, 2015));
