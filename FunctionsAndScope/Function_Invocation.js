//\w to \W or \W to \w transition is a word boundary
function wordBoundaries(subject) {
  //regex for word boundary position
  var pattern = /\b/g;

  //invoke match method defined on the string
  return subject.match(pattern).length;
}

var book = 'JavaScript: The Good Parts';
console.log(wordBoundaries(book)); //8