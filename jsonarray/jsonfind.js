var sname =["jay","raj","parth"]

var x  = sname.find((n)=>{
    return n=="jay"
})
console.log(x)

var students =[
    {
        id:1,
        name:"jay",

    },
    {
        id:2,
        name:"raj",
    }
]


var x = students.find((s)=>{

    return s.name =="jay"
})
console.log(x)


var studentRecord = {
    
    streams:[
        {
            name:"comm",
            students:["jay","raj"]
        },
        {
            name:"science",
            students:[
                {
                    id:1,
                    name:"parth",
                    gender:"male"
                },
                {
                    id:2,
                    name:"rajvi",
                    gender:"female"
                }
            ]
        }
    ]

    
}

var x = studentRecord.streams.find((stream)=>{
    return stream.name=="science"
})
console.log(x)

var x1 = x.students.filter((s)=>{

    return s.gender =="female"
})
console.log(x1)

var test = studentRecord.streams.find((stream)=> stream.name =="science").students.filter((stu)=>{
    return stu.gender =="female"
})
console.log(test)