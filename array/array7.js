var users =[["virat","kohli"],["sachin","tendulkar"],["ms","dhoni"]]

// for(let i=0;i<users.length;i++){
// //["virat","kohli"] [0]
//     for (let j=0;j<users[i].length;j++){
//         console.log(users[i][j])
//     }
//     console.log("**********")
// }



// users.forEach((user)=>{

//         user.forEach((u)=>{
//             console.log(u)
//         })
//         console.log("**********")

// })



users = users.map((user)=>{

    return user.map((u)=>{
        return u.toUpperCase()
    })
}).forEach((user)=>{
    user.forEach((u)=>{
        console.log(u)
    })
    console.log("**********")
})
