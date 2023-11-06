var users = ["ram", "raj", "parth", "priya", "neha", "shrma", "kohli"];
var filuser =[]
// for(let i=0;i<users.length;i++){
//     if(users[i].length>3){
//         filuser.push(users[i])
//     }
// }


//if true it will add element to new array
filuser = users.filter((user)=>{

    //predicate function return true or false
    //parth --> parth.length>3 --> true
        return user.length>3
})


console.log(filuser)



var amount = [100,23,45,67890,123,45]

var filamount = amount.filter((amt)=>{

    return amt %2 ==0
})
console.log(filamount)












