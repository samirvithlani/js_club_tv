//var data = ["java",122,"python","cpp",true,"hello",1000]
var data  = ["hindi","english","japanese","chinese","french","malayalam","telgu"]
console.log(data)

//sort... will not work for mixed data type

var x = data.some((v)=>{
   //return v.startsWith("c")
    return v.length>10
})
console.log("x....",x)
x = data.every((v)=>{
    return v.length>3
})



