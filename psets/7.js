/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
    var outS = s[0];
    var j = s.length;
    for (var i = 1; i<j; i++) {
        if (s[i] === s[0]) {
            outS = outS+"*";
        } else {
            outS = outS + s[i];
        }
    }
    return outS;
}

console.log(fixStart("esto es una prueba de como debe quedar esta cadena"));
