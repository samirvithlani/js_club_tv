//map //filter //reduce
//map will return a new array with the same length as the original array
//filter will return a new array with the same length or less than the original array
//reduce will return a single value (or object) as a result of iterating through the array

var products =[
    {
        id:1,
        name:"pen",
        price:20
    },
    {
        id:2,
        name:"iphone",
        price:200
    },
    {
        id:3,
        name:"ipad",
        price:300
    },
    {
        id:4,
        name:"macbook",
        price:400
    }
]

var fillarray = products.filter((prod)=>{

    return prod.price<=250 //true falase...
})


var fillarray1 = products.filter((prod)=>{

    return prod.name.startsWith("i") //true falase...
})
console.log(fillarray)
console.log(fillarray1)