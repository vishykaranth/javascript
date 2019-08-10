var filter = function (key, value) {
//don't serialize property 'radius'
  if (key === 'radius') {
    return undefined;
//      return value;
  } else {
    return value;
  }
};

//define circle object
var circle = {x: 100, y: 200, radius: 50};

//get string version of circle object
var info = JSON.stringify(circle, filter);

//print the string equivalent of object
console.log(info);  // '{'x': 100, 'y': 200}'