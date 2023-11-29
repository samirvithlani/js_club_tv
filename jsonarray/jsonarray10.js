var company={
    departments:[
        {
            name:"IT",
            employees:[
                {
                    name:"John",
                    age:30,
                    gender:"male"


                },
                {
                    name:"Mike",
                    age:40,
                    gender:"female"
                },
                {
                    name:"Mary",
                    age:50,
                    gender:"female"
                }
            ]
        },
        {
            name:"HR",
            employees:[
                {
                    name:"Amita",
                    age:30,
                    gender:"female",
                    salary:30000

                },
                {
                    name:"Rama",
                    age:40,
                    gender:"female",
                    salary:40000
                }
            ]
        },
        {
            name:"Finance",
            employees:[
                {
                    name:"Ravi",
                    age:30,
                    gender:"male"
                },
                {
                    name:"Raj",
                    age:50,
                    gender:"male"

                }
            ]
        }
    ]
}

var itdeptfemales = company.departments.find((dept)=>dept.name=="IT").employees.filter((emp)=>emp.gender=="female")
console.log(itdeptfemales)

var test = company.departments.find((dept)=>dept.name=="HR").employees
console.log(test)

var totalSalary = 0;
test.forEach((emp)=>{
    totalSalary = totalSalary + emp.salary
})
console.log(totalSalary)

