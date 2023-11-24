var employees = [
  {
    id: 1,
    name: "amit",
    age: 25,
    isMarried: true,
    child: 1,
    gender: "male",
    salary: 25000,
  },
  {
    id: 2,
    name: "raj",
    age: 22,
    isMarried: false,
    child: 0,
    gender: "male",
    salary: 2000,
  },
  {
    id: 3,
    name: "sita",
    age: 27,
    isMarried: true,
    child: 2,
    gender: "female",
    salary: 45000,
  },
  {
    id: 4,
    name: "jaya",
    age: 24,
    isMarried: false,
    child: 0,
    gender: "female",
    salary: 26000,
  },
];
//find all employee who is married...
//find female employee who is married 
//find all employee who has child
//find all employee who has single child
//find all female employee who has child
//find all employee who has salary > 25000
//find all male employee who has salary > 25000
//find all employee who has salary > 25000 and age > 25


var filemployee =[]

//q1

filemployee = employees.filter((e)=>{

    return e.isMarried==true;
})

console.log(filemployee);


//q2

filemployee = employees.filter((e)=>{


    return e.gender =="female" && e.isMarried==true;
})
console.log("q2",filemployee);

//q3

filemployee = employees.filter((e)=>{

    return e.child>0;
})
console.log("q3",filemployee);

//q4
filemployee = employees.filter((e)=>{

    return e.child == 1;
})
console.log("q4",filemployee);

//q5

filemployee = employees.filter((e)=>{


    return e.gender =="female" && e.child>0;
})
console.log("q5",filemployee);

//q6

filemployee = employees.filter((e)=>{

    return e.salary>25000;
})
console.log("q6",filemployee);
