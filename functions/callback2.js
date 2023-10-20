

function Science(name){

    return name + " is a science student"
}

function Arts(name){
    
        return name + " is an arts student"
}

function commerce(name){
    
        return name + " is a commerce student"
}



function admission(cb,name){
//cb function
//name is a parameter

///comm
    var x = cb(name)
    console.log(x)

}

var per = parseFloat(prompt("enter your percentage"))
var sname = prompt("enter your name")

if(per>=80){

    admission(Science,sname)

}
else if (per>=70 && per<=80){

    admission(commerce,sname)
}

else{
    admission(Arts,sname)
}
