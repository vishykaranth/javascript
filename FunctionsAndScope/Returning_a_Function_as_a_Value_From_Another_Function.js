function outer(x) {
//this secret is a closure
  var secret = 5;
  return function () {
    console.log(secret + x);
  }
}

//get the inner function
var inner = outer(10);

//invoke inner function
inner(); //15