
var users = [
    {
        id:101,
        name:"Raj",
        email:"raj@gmail.com",
        gender:"male",
        address:"Bangalore",
        status:true
    },
    {
        id:102,
        name:"Amit",
        email:"amit@gmail.com",
        gender:"male",
        address:"Bangalore",
        status:false
    },
    {
        id:103,
        name:"Priya",
        email:"priya@gmail.com",
        gender:"female",
        address:"Delhi",
        status:true
    },

]




function generateTable(){


    var tobody = document.getElementById("tbody");

    for(let i=0;i<users.length;i++){

        var tr = document.createElement("tr");


        var IdTd = document.createElement("td");
        var nameTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var genderTd = document.createElement("td");
        var addressTd = document.createElement("td");
        var actionTd = document.createElement("td");

        //create button for delete
        var btn = document.createElement("button")
        btn.innerHTML = "Delete";
        btn.className = "btn btn-danger";

        btn.addEventListener('click',()=>{
            alert("Delete button clicked" + users[i].id);
        })

        
        IdTd.innerHTML = users[i].id;
        nameTd.innerHTML = users[i].name;
        emailTd.innerHTML = users[i].email;
        genderTd.innerHTML = users[i].gender;
        addressTd.innerHTML = users[i].address;
        actionTd.appendChild(btn);
        
        tr.appendChild(IdTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(genderTd);
        tr.appendChild(addressTd);
        tr.appendChild(actionTd);
        

        tobody.appendChild(tr);

    }




}