var a = 10;

function outer(){
    var b = 20;
    
    function inner(){
        console.log(a);
        console.log(b);
    }
    
    inner();
}

outer();