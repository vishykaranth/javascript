var calculator = require('./calculator.js');

var a = 10, b = 5;

console.log("Addition :: " + calculator.add(a, b));


var os = require('os');
var total = os.totalmem()/1000000;

console.log(`Total Memory : ${total} gb`);

var fs1 = require('fs');
const files = fs1.readdir('./', 
    function(err, files){
    if(err){
        console.log(err);
    }else{
        console.log(files);       
    }
    
});

console.log(files);