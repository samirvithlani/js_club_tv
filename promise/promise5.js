const fetchResult = ()=>{



    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
           // resolve({name:"amit",score:100,grade:"A"})
           reject({status:500,message:"payment required"})
        },3000)

    })
}



const printResult = async ()=>{

    console.log("fetching result...")
    console.log("processing result...")
    const result = await fetchResult()
    console.log(result)
    
    console.log("result printed...")


}
printResult()
