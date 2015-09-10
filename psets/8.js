/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

var verbing = function(word) {
  // write your solution here...
  var vReturn;
  if (word.length > 3) {
    if (word.substring(word.length-3,word.length) !== "ing") {
      vReturn=word+"ing";
    } else {
      vReturn=word+"ly";
    }
  } else {
    vReturn=word;
  }
  return vReturn;
};

console.log(verbing("yoreamoring"));
