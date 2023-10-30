var address = "201,main road,bangalore,karnataka,560001"

//var x = address.split(",")
//var x = address.split("")
var x = address.split(" ")
console.log("split",x)



var ind = address.indexOf("a")
console.log("index of",ind)
ind = address.lastIndexOf("in")
console.log("index of",ind)
ind = address.indexOf("ba")
console.log("index of",ind)

//ind = address.indexOf("20")
ind = address.indexOf("20",4)
console.log("index of",ind)