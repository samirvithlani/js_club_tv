// var user ={

//     name:"amit",
//     age:23,
//     isActive:true

// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.isActive);


var users = [
    {
        name:"amit",
        age:23,
        isActive:true
    },
    {
        name:"raj",
        age:24,
        isActive:false
    },
    {
        name:"karan",
        age:25,
        isActive:true
    }
]
console.log(users);

// for(let i=0;i<users.length;i++){

//     //console.log(users[i]);
//     console.log(users[i].name);
//     console.log(users[i].age);
//     console.log(users[i].isActive);
//     console.log("---------------------")

// }

//u = users[i]


users.push({name:"kumar",age:26,isActive:false})
users.push({name:"ajay",age:27,isActive:false})

var removedobj = users.pop();
console.log("remved obj",removedobj);

//splice

users.splice(1,0,{name:"jeet",age:28,isActive:true})


users.forEach((u)=>{

        console.log(u.name);
        console.log(u.age);
        console.log(u.isActive);
        console.log("---------------------")
})