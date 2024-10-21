   // Validate the form fields
   function validateForm() {
    let fullname = document.getElementById("name"); 
    let address = document.getElementById("addr");  
    let email = document.getElementById("email");

    // Check if the name field is empty
    if (fullname.value.length == 0) {
        document.getElementById("empty_msg").innerHTML = "*All Fields are mandatory";
        fullname.focus();
        return false;
    }

    // Check if the name contains only letters
    if (!inputAlpha(fullname)) {
        document.getElementById("empty_msg").innerHTML = "Name must contain only letters";
        fullname.focus();
        return false;
    }

    // Check if the address is empty or contains invalid characters
    if (address.value.length == 0 || !inputAlphaNumeric(address)) {
        document.getElementById("empty_msg").innerHTML = "Address must contain letters and numbers";
        address.focus();
        return false;
    }

    // Check if the email is valid
    if (!inputEmail(email)) {
        document.getElementById("empty_msg").innerHTML = "Enter a valid email address";
        email.focus();
        return false;
    }

    return true; // If all validations pass
}

// Function to check if the input contains only letters (alphabets)
function inputAlpha(input) {
    const alphaExp = /^[A-Za-z]+$/; // Regular expression for letters
    return alphaExp.test(input.value); // Test the input value
}

// Function to check if the input contains both letters and numbers (alphanumeric)
function inputAlphaNumeric(input) {
    const alphaNumExp = /^[A-Za-z0-9\s]+$/; // Regular expression for alphanumeric
    return alphaNumExp.test(input.value); // Test the input value
}

// Function to check if the input is a valid email address
function inputEmail(input) {
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
    return emailExp.test(input.value); // Test the input value
}