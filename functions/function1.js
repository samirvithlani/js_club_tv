//dynamic.... return type.. void name(param){}
//return --> return type -->
//function keyword...
//arrow functions...
//advantages -->
//boiler plate code -->

function demo() {
  console.log("Hello");
}

function sum(a, b) {
  console.log("a = ", a);
  console.log("b = ", b);
  var c = a + b;

  //return a + b;
  return c;
}

demo();
var x = sum(12, 22);
console.log("x = ", x);


function power(){


    return 2**3;
}

var p = power();
console.log("p = ",p);
console.log("power = ",power());