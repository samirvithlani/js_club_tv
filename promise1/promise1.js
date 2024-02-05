// console.log("process started...")

// setTimeout(()=>{
//     console.log("processing...")
// },3000)
// console.log("process ended...")



var promise = new Promise((resolve,reject)=>{
        //resolve("sucess")
        setTimeout(()=>{
            //resolve("success")
            reject("error....")
        },3000)
})

console.log(promise)
promise.then((data)=>{
    console.log(data)
})
promise.catch((err)=>{
    console.log(err)
})

