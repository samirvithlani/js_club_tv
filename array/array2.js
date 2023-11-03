var data =["java","python","c","cpp","javascript"]

console.log(data)
data.splice(0,0,"node") //it will at oth index...and remove 0 element
console.log(data)
data.splice(3,0,"php",".net") //it will at 3rd index...and remove 0 element
console.log(data)
var removedelm = data.splice(1,1) //it will at 1st index...and remove 1 element
console.log("removing....",removedelm)
console.log(data)
removedelm = data.splice(2,2,"ruby")//it will at 2nd index...and remove 2 element and add ruby
console.log("removing....",removedelm)
console.log(data)