function submitHandler(event){

    event.preventDefault(); // prevent the action from being executed
    console.log(event);
    console.log("submitHandler called");

    var name = document.getElementById("name").value
    console.log(name);
    var age = document.getElementById("age").value
    console.log(age);


    if(name.length<3){

        var nameerror = document.getElementById("nameerror")
        nameerror.innerHTML = "Name should be greater than 3 characters"
        document.getElementById("name").style.border = "2px solid red"
        
    }

    if(age<18){
        var ageerror = document.getElementById("ageerror")
        ageerror.innerHTML = "You are not eligible to vote"
        document.getElementById("age").style.border = "2px solid red"
        //alert(name +"  You are not eligible to vote")
    }

    var namevalue = document.getElementById("namevalue")
    namevalue.innerHTML = name
    var agevalue = document.getElementById("agevalue")
    agevalue.innerHTML = age

    // var name = document.getElementsByName("name")[0].value
    // console.log(name);
}