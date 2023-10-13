//java c cpp -->
 //nested --> call...

 function testOuter(){

    console.log("outer function");

        function testInner(){

            console.log("inner function");
        }

       testInner();     

 }
//testOuter();
//testIneer() //error
//testInner();     


function sum(a,b){

    // a b param sum --> local to sum function
    console.log("sum function");


        function add(x,y,z)
        {
            //xyz param it is local to add function
            console.log(x);
            console.log(y);
            console.log(z);
            console.log("add function");
            console.log("a",a);
            console.log("b",b);
        }
        
        add(100,200,300); //param...

        //console.log("x in sum.,.",x); error,,,

}

//sum(10,20);


function userData(){


    console.log("user data function");


        function studentData(){

            console.log("student data function");
            return "this is student data function";
        }

        var s = studentData();
        console.log("student data ot -->",s);

        return "this is user data function"

}

// var x = userData();
// console.log("user data ot -->",x);


function employeeData(){


    function employees(){

        return "all employees..."
    }

    //var x = employees();
    return employees();
    //return x;

}

var e = employeeData();
console.log("employee data ot -->",e);


function mul(a){
    //2

    function power(b){
        //10

    //2 ** 10
        return a ** b;
        //2 ** 10
    }

    return power(10);
}


var m = mul(2);
console.log("mul ot-->",m);