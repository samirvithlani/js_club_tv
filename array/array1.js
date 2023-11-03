var data =["java","python","c","cpp","javascript"]

console.log(data)

console.log(data.length)
var r = data.push("php")
console.log("after push new len...",r)
console.log(data)

var removedelm = data.pop()
console.log("removing....",removedelm)

console.log(data)

r = data.unshift("ruby")
console.log("after unshift new len...",r)
console.log(data)

removedelm = data.shift()
console.log("removing....",removedelm)
console.log(data)


