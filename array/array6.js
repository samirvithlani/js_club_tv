//foreach

var users = ["ram","raj","parth","priya","neha","shrma","kohli"]

//user --> users[i]
users.forEach((user)=>{

    console.log(user)
})

//map will return new array with every element of users array
// users = users.map((user)=>{
    
//     return user.toUpperCase()
// })


users = users.map((user)=>user.toUpperCase())
console.log(users)

// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }
