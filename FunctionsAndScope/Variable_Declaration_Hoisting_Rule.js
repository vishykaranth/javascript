function scopeTest() {
  console.log(a); // undefined - this means variable a is hoisted at this point. No ReferenceError
  var a = 1;
  console.log(a); //1
}

scopeTest();