function getData(){


    var promise = new Promise(function(resolve, reject){

        setTimeout(()=>{
            resolve({id:1,name:"subramanian"})
        },3000)

    })

    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err)
    })


}
getData()