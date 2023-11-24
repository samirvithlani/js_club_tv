var users = [
  {
    id: 1,
    name: "amit",
    age: 23,
    isActive: true,
  },
  {
    id: 2,
    name: "raj",
    age: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "rohit",
    age: 26,
    isActive: true,
  },
  {
    id: 4,
    name: "vijay",
    age: 27,
    isActive: false,
  },
];

var filusers = [];

//filter --> it will return the array of objects based on condition
//alway pred=icate expression should 

// #1
// filusers = users.filter((u) => {
//     console.log(u);
//       return u.age > 25; //false
// });


//#2
// filusers = users.filter((u)=>{

//     return u.isActive==true;
// })

//#3

filusers = users.filter((u)=>{
    return u.age >= 25 && u.isActive==true;
})

// for(let i=0;i<users.length;i++){

//     if(users[i].age>25){
//         filusers.push(users[i]);
//     }

// }
console.log(filusers);
