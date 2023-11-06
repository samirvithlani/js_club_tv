
var users =["ram","raj","parth","priya","neha","shrma","kohli"]


function userData(u){

    console.log("u -->",u)

    return users.filter((user)=>{
        
        //ram != raj --> true,
        //raj!=raj --> false
        return user !=u 
    })

}

var x = userData("raj")
console.log(x)