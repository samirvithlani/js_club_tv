//java script dones not follow multithreading
//to utilize multithreading we use callback function
//callback function is a function which is passed as an argument to another function 
//and is executed after some operation is completed
//using callback function we can achieve asynchronous programming

//asynchronous programming is a means of parallel programming in which a 
//unit of work runs separately from the main application 
//thread and notifies the calling thread of its completion, failure or progress

//synchrounous programming is a means of parallel programming in which a

// 11111111111 -->
// 22222222222 -->  non synchrounous programming

//we dont have to specify the data type of the arguments in the function
function test(){

    console.log("Test function");
    
}


function greet(a){

    console.log("hello world",a);
    //funtion prototype

    a() //function call
    
}


// greet("amit")
// greet(100)
// greet(true)
// greet(10.5)
//greet(test)


function add(no1,no2){

    console.log(no1+no2);


}

function sub(no1,no2){

    console.log(no1-no2);

}
function mul(no1,no2){

    console.log(no1*no2);

}


//callback function
function calc(cb){

    console.log("c --->",cb)
    cb(10,20)

}

var p = prompt("enter your choice 1.add 2.sub 3.mul")
switch(p){

    case "1":
        calc(add)
        break;
    case "2":
        calc(sub)
        break;
    case "3":
        calc(mul)
        break;

}
