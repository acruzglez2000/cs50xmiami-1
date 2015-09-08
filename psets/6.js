/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var tmpA = a.substr(0,2);
  var tmpB = b.substr(0,2);
  return tmpB+ a.substr(2, a.length-2)+" " + tmpA + b.substr(2, b.length-2);
}
console.log(mixUp("Arnaldo", "Cruz"));