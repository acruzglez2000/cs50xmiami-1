/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var vAge = 47;
var vMaxAge = 120;
var vEstAmount = 1;
console.log("You will need "+ ((vMaxAge-vAge)*365+vEstAmount)+" to last you until the ripe old of "+vMaxAge);
