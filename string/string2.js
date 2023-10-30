var data = "java"

data = data.toUpperCase()
console.log("upper case",data)

data = data.toLowerCase()
console.log("lower case",data)

//startsWith

var x = data.startsWith("j")
console.log("starts with",x)

var y = data.endsWith("a")
console.log("ends with",y)


var userName = "hi this is my name"
var x = userName.startsWith("t",3)
console.log("starts with -->",x)

var y = userName.endsWith("m",userName.length-1)
console.log("ends with -->",y)


var msg = "dont plant bomb in the city"

var x = msg.includes("t ")
console.log("includes",x)


