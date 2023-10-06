//printf,sop,cout.... sop -->
//log function
//console -> object
console.log("Hello");
console.info("Hello");
console.warn("Hello");
console.error("Hello");

//variable :- vaariables are the container which holds the value
//3 keywords to declare a variable, var let const
//var  -->global scope
//let -->block scope
//const -->block scope / final scope

//explict type -->
//number
//string
//boolean
//undefined
//null

var x = 100; // int number...
console.log(x);
console.log(typeof x);

var y = "Raj";
console.log(y);
console.log(typeof y);

var z = 10.2;
console.log(z);
console.log(typeof z);

var isActive = true;
console.log(isActive);
console.log(typeof isActive);

var un;
console.log("un....", un);
console.log("type...", typeof un);

var n = null;
console.log("n....", n);
console.log("type...", typeof n);

var x = null;
console.log("x....", x);
console.log("type...", typeof x);

let amount = 2000;
console.log("amount.....", amount);

amount = 3000;
console.log("amount.....", amount);

{
  //block...
  let price = 200;
  var price1 = 300;
  console.log("price....", price);
  console.log("price1....", price1);
}
console.log("price1....", price1);
//console.log("price....",price) error.....

// var amount = 3000
// console.log("amount.....",amount)

const address = "Bangalore";
console.log("address....", address);

//address = "Mysore"
console.log("address....", address);

var tech1;
console.log("tech1....", tech1);

//const tech; //compile time error
