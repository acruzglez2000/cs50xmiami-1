/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var vCelcius = 37;
console.log(vCelcius + " oC " + (((vCelcius*9)/5)+32) + " oF");
var vFahrenheit = 98.6;
console.log(vFahrenheit + " oF " + (((vFahrenheit-32)*5)/9) + " oC");
