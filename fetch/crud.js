const getAllUsersFromApi = async () => {
  const res = await fetch("https://node5.onrender.com/user/user");
  const data = await res.json();
  console.log(data);

  const tbody = document.getElementById("tbody");
  for (let i = 0; i < data.data.length; i++) {
    const tr = document.createElement("tr");
    const idTD = document.createElement("td");
    idTD.innerHTML = data.data[i]._id;
    const nameTD = document.createElement("td");
    nameTD.innerHTML = data.data[i].name;
    const emailTD = document.createElement("td");
    emailTD.innerHTML = data.data[i].email;
    const ageTd = document.createElement("td");
    ageTd.innerHTML = data.data[i].age;
    const statusTD = document.createElement("td");
    statusTD.innerHTML = data.data[i].isActive;
    if (data.data[i].isActive == false) {
      statusTD.style.color = "red";
    } else {
      statusTD.style.color = "green";
    }

    const actionTd = document.createElement("td");

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger"; //bootstrap class
    actionTd.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      deleteUser(data.data[i]._id);
    });

    tr.appendChild(idTD);
    tr.appendChild(nameTD);
    tr.appendChild(emailTD);
    tr.appendChild(ageTd);
    tr.appendChild(statusTD);
    tr.appendChild(actionTd);
    tbody.appendChild(tr);
  }
};

const deleteUser = async (id) => {
  
    const res = await fetch(`https://node5.onrender.com/user/user/${id}`,{
        method: "DELETE",
    })

    console.log(res);
    if(res.status == 204){
        location.reload();
    }

};
