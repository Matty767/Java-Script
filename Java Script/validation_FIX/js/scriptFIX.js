function validateForm() {
    // Retrieve values from the form
    var fullname = document.getElementById("name").value.trim();
    var address = document.getElementById("addr").value.trim();
    var email = document.getElementById("email").value.trim();
    var tel = document.getElementById("tel").value.trim();
    
    // Create regular expressions
    var fullNameRegExp = /^[A-Za-z\s]+$/; // Only letters and spaces
    var addressRegExp = /^.+$/; // Non-empty string
    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
    var telRegExp = /^\d{10}$/; // 10-digit phone number

    // Check for empty fields and display error message
    if (fullname.length === 0 || address.length === 0 || email.length === 0 || tel.length === 0) {
        document.getElementById("empty_msg").innerText = "*All Fields are Mandatory*";
        return false;
    } else {
        document.getElementById("empty_msg").innerText = "";
    }

    // Validate fullname
    if (!fullname.match(fullNameRegExp)) {
        let nameError = document.querySelector(".name_err");
        nameError.innerHTML = "Your name can only contain letters";
        document.getElementById("name").focus();
        return false;
    } else {
        document.querySelector(".name_err").innerHTML = "";
    }

    // Validate address
    if (!address.match(addressRegExp)) {
        let addrError = document.querySelector(".addr_err");
        addrError.innerHTML = "Address cannot be empty";
        document.getElementById("addr").focus();
        return false;
    } else {
        document.querySelector(".addr_err").innerHTML = "";
    }

    // Validate email
    if (!email.match(emailRegExp)) {
        let emailError = document.querySelector(".email_err");
        emailError.innerHTML = "Please enter a valid email address";
        document.getElementById("email").focus();
        return false;
    } else {
        document.querySelector(".email_err").innerHTML = "";
    }

    // Validate telephone number
    if (!tel.match(telRegExp)) {
        let telError = document.querySelector(".tel_err");
        telError.innerHTML = "Please enter a 10-digit telephone number";
        document.getElementById("tel").focus();
        return false;
    } else {
        document.querySelector(".tel_err").innerHTML = "";
    }

    // All validations passed, display confirmation message
    document.getElementById("confirmation_msg").innerText = "You have been successfully validated!";
    // Optionally, you could hide the form
    document.querySelector("form").style.display = "none";
    return false; // Prevent form submission for demonstration
}
