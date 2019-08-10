//Assign a funstion to variable 'circumference'
var circumference = function (circle) {
  return 2 * Math.PI * circle.radius;
};
//define circle object
var circle = {x: 100, y: 100, radius: 50};

//invoke the function 'circumference'
console.log(circumference(circle)); //314.159