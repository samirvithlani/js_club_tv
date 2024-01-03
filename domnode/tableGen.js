
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
        var statusTd = document.createElement("td");


        IdTd.innerHTML = users[i].id;
        nameTd.innerHTML = users[i].name;
        emailTd.innerHTML = users[i].email;
        genderTd.innerHTML = users[i].gender;
        addressTd.innerHTML = users[i].address;
        statusTd.innerHTML = users[i].status;
        //statusTd.style.color = users[i].status ==true ? "green" : "red";
        statusTd.className = users[i].status == true? "badge badge-success" : "badge badge-danger";

        tr.appendChild(IdTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(genderTd);
        tr.appendChild(addressTd);
        tr.appendChild(statusTd);

        tobody.appendChild(tr);

    }




}