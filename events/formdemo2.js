var Nameflag = true;
var Contactflag = true;

function handleSubmit(event) {
  event.preventDefault();
}

function checkNameLen() {
  var name = document.getElementById("name").value;
  if (name.length < 3) {
    document.getElementById("nameError").innerHTML =
      "Name must be atleast 3 characters long";
    Nameflag = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
    Nameflag = true;
  }
}

function checkContact() {
  var contact = document.getElementById("contact").value;
  //regex
  var pattern = /^[6-9]{1}[0-9]{9}$/;

  if (!pattern.test(contact)) {
    document.getElementById("contactError").innerHTML =
      "Invalid contact number";
    Contactflag = false;
  } else {
    document.getElementById("contactError").innerHTML = "";
    Contactflag = true;
  }
}

// if (Nameflag && Contactflag) {
//   document.getElementById("submit").disabled = false;
// } else {
//     document.getElementById("submit").disabled = true;
// }
