// var employee = {

//     id:1,
//     name:"Rajan",
//     hobbies:["cricket","football","chess"],
//     salary:10000,

// }

var employee = {

    id:1,
    name:"Rajan",
    hobbies:["cricket","football","chess"],
    salary:10000,

    qualifications:[
        {
          id:101,
          degree:"BE",
          university:"VTU",  
        },
        {
            id:102,
            degree:"MBA",
            university:"IIM",
        }
    ]

}

console.log(employee)
console.log(employee.id)
console.log(employee.name)
console.log(employee.hobbies)
console.log(employee.salary)

// console.log(employee.hobbies[0])
// console.log(employee.hobbies[1])
// console.log(employee.hobbies[2])

for(let i=0;i<employee.hobbies.length;i++){

    console.log(employee.hobbies[i])
}


// console.log(employee.qualifications[0].degree)
// console.log(employee.qualifications[0].university)
for(let i=0;i<employee.qualifications.length;i++){

    console.log(employee.qualifications[i].degree + " "+ employee.qualifications[i].university)
}
