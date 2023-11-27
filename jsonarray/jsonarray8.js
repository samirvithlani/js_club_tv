var emps = [
    {
        id:1,
        name:"John",
        degrees:[
            {
                degree:"BE",
                college:"ABC",
                university:"PQR",
                marks:80
            
            },
            {
                degree:"ME",
                college:"ABC",
                university:"PQR",
                marks:70
            
            }
        ]
    },
    {
        id:2,
        name:"amit",
        degrees:[
            {
                degree:"bcom",
                college:"HL",
                university:"Gu",
                marks:90
            
            },
            {
                degree:"Mcom",
                college:"HL",
                university:"Gu",
                marks:80
            
            }
        ]
    }
]


var updatedEmps = emps.map((emp)=>{
    
    var degrees = emp.degrees.map((d)=>{

        return{
            degree:d.degree.toUpperCase(),
            college:d.college.toUpperCase(),
            university:d.university.toUpperCase(),
            marks:d.marks -10
        }
    })
    
    return{
        id:emp.id,
        name:emp.name.toUpperCase(),
        degrees:degrees
    }
})
console.log(updatedEmps)