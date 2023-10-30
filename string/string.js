//string immutability
//same referance change..

//string stores data in index format
var sname ="sachin"

// console.log(name[0]) //s
// console.log(name[1]) //a
// console.log(name[2]) //c
// console.log(name[3]) //h
// console.log(name[4]) //i
// console.log(name[5]) //n

for(var i=0;i<sname.length;i++){
    console.log(sname[i])
}
var c = sname.charAt(0) //s
console.log("char at..",c)

var c = sname.charCodeAt(1) //s
console.log("char code at..",c)


var c  = sname.codePointAt(1) //s
console.log("char code point at..",c)


//immutable string
sname = sname.concat(" tendulkar")
console.log("concat",sname)
sname = sname + " is a cricketer"

console.log("concat",sname)

///trim
var email = "  royal@gmail.com  "
console.log("len... ",email.length)
//email = email.trim()
//email = email.trimRight()
email = email.trimLeft()
console.log("len... ",email.length)
console.log("trim",email)



//replace

var msg = "india this is india"
msg = msg.replace("india","bharat")
console.log("replace",msg)
//replcae all

var msg = "india this is india"
//msg = msg.replaceAll("india","bharat")
msg = msg.replaceAll("india","bharat")
console.log("replace all",msg)

//substring

var address ="201-main-road bangalore"
//var x = address.substring(4,8)
//starting index and ending index
var x = address.substring(4)
console.log("substring",x)










