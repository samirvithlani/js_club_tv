const postData = async (user) => {
  //   const user = {
  //     name: "Mahir",
  //     age: 25,
  //     email: "mahir@gmail.com",
  //     isActive: true,
  //   };

  const response = await fetch("https://node5.onrender.com/user/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log("response....", response);
  const data = await response.json();
  console.log(data);

  // if(response.status ===201){
  //     alert("User added successfully");
  // }

  //toster code...
  var toast = document.getElementById("toast");
  toast.className = "show";
  var desc = document.getElementById("desc");
  desc.innerHTML = "User added successfully";

  if (response.status == 201) {
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 5000);
  }
};

const submitHandler = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const isActive = document.getElementById("status").value;

  const user = {
    name: name,
    age: age,
    email: email,
    isActive: isActive == "active" ? true : false,
  };

  console.log(user);
  postData(user);
};

//postData();
