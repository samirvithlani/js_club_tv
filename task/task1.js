// function checkEmail(){
//     var emails = ["ram@gmail.com","raj@gmail.com","amit@gmail.com"]

//     const email = document.getElementById('email').value;
//     const flag = document.getElementById('flag');
//     console.log(email);

//     if(emails.includes(email)){
//         flag.innerHTML = "Email already exists";
//     }
//     else{
//         flag.innerHTML = "Email is available";
//     }




// }
var emails = ["ram@gmail.com","raj@gmail.com","amit@gmail.com"]

const email = document.getElementById('email');
email.addEventListener('blur',()=>{

    const email = document.getElementById('email').value;
    const flag = document.getElementById('flag');
    console.log(email);

    if(emails.includes(email)){
        flag.innerHTML = "Email already exists";
    }
    else{
        flag.innerHTML = "Email is available";
    }
    

});