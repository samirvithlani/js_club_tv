var x = 100;
var y = 200;
var ans;

if (x > y) {
  ans = x;
} else {
  ans = y;
}

console.log("ans = ", ans);

var ans1 = x > y ? x : y;
console.log("ans1 = ", ans1);

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

var m = max(100, 200);
console.log("m = ", m);

const max1 = (a, b) => (a > b ? a : b);
var m1 = max1(220, 30);
console.log("m1 = ", m1);

// var sum = p+q+r;
// if(sum>500){
//     return true;
// }
// else{
//     return false;
// }

var p = 100;
var q = 200;
var r = 300;

function check(p1, q1, r1) {
  if (p1 + q1 + r1 > 500) {
    return true;
  }
  return false;
}

var c = check(p, q, r);
console.log("c = ", c);

var ans1 = p + q + r > 500 ? true : false;
console.log("ans1 = ", ans1);

var age = 19;

age > 18 ? console.log("You can vote") : console.log("You can't vote");

var morngTemp = 30;
var eveTemp = 40;

//nested if....
// if(morngTemp>25){

// }

morngTemp > 25
  ? console.log("Wear light clothes")
  : eveTemp > 35
  ? console.log("Wear cotton clothes")
  : console.log("Wear warm clothes");

  //nested if....

var userAge =60
var isAlive = true;

if(isAlive){
    if(userAge>=60){
        console.log("You are eligible for vaccination");
    }
    else{
        console.log("You are not eligible for vaccination");
    }
}
else{
    console.log("You are not alive");
}

//convert above nested if to ternary operator
isAlive?
userAge>=60?
console.log("You are eligible for vaccination"):
console.log("You are not eligible for vaccination"):
console.log("You are not alive");


//var checkEligibility=(age,isAl)=>isAl?age>=60?"You are eligible for vaccination":"You are not eligible for vaccination":"You are not alive";

const objName =()=>{

    return "Hello1";
}
console.log("objName = ",objName());
const objName1 = ()=>"Hello";
console.log("objName1 = ",objName1());