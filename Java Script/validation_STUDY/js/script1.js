function validateForm() {
  let fullname = document.getElementById("name").value;
  let address = document.getElementById("addr").value;
  let email = document.getElementById("email").value;

  //Create Regular expressions
  let fullNameRegExp = /^[a-zA-Z ]+$/;
  let addressRegExp = /^[0-9a-zA-Z ]+$/;
  let emailRegExp =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\b\w{2,4}\b)+$/;

  //Checks for empty fields & displays error message
  if (fullname.length == 0) {
    document.getElementById("empty_msg").innerText =
      "*All Fields are Mandatory*";
    return false;
  }
  //uses the !(logical negation) operator to switch between true and false
  if (!fullname.match(fullNameRegExp)) {
    let nameError = document.querySelector(".name_err");
    nameError.innerHTML = "Your name can only contain letters";
    document.getElementById("name").focus();
    return false;
  } else {
    let nameError = document.querySelector(".name_err");
    nameError.style.visibility = "hidden";
  }
  //uses the !(logical negation) operator to switch between true and false
  if (!address.match(addressRegExp)) {
    let addressError = document.querySelector(".addr_err");
    addressError.innerText = "Address must only be numbers & letters";
    document.getElementById("addr").focus();
    return false;
  }
  //uses the !(logical negation) operator to switch between true and false
  if (!email.match(emailRegExp)) {
    let emailError = document.querySelector(".email_err");
    emailError.innerText = "Invalid email - incorrect format";
    document.getElementById("email").focus();
    return false;
  }
  //All validations passed return true and submit form
  return true;
} //END FORM VALIDATE
