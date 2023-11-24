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
      salary: 20000,
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



var id =1


var filemp = employees.filter((e)=>{


    return e.id != id;
})

console.log(filemp);

//remove all married employee from employees array

var filemp = employees.filter((e)=>{


    //return e.isMarried != true;
    return e.isMarried == false;

})
console.log(filemp);

//remove all employee whos salary is less than 25000

var filemp = employees.filter((e)=>{

    return e.salary > 25000;
})
console.log(filemp);

