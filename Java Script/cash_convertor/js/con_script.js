function passSymbol(symbol) {
    // Get the user input from the "pounds" input field and convert it to a number
    let pounds = Number(document.getElementById("pounds").value);

    let finalAmount;

    // Check which currency the user has selected
    if (symbol === "euros") {
        // Convert pounds to euros at the rate of 1.14
        finalAmount = (pounds * 1.14).toFixed(2);
        // Display the converted value in the "converted" input field with a euro symbol
        document.getElementById("converted").value = `€ ${finalAmount}`;
    } else if (symbol === "dollars") {
        // Convert pounds to dollars at the rate of 1.30
        finalAmount = (pounds * 1.30).toFixed(2);
        // Display the converted value in the "converted" input field with a dollar symbol
        document.getElementById("converted").value = `$ ${finalAmount}`;
    } else if (symbol === "yen") {
        // Convert pounds to yen at the rate of 150.27
        finalAmount = (pounds * 150.27).toFixed(2);
        // Display the converted value in the "converted" input field with a yen symbol
        document.getElementById("converted").value = `¥ ${finalAmount}`;
    } else if (symbol === "rupees") {
        // Convert pounds to rupees at the rate of 101.37
        finalAmount = (pounds * 101.37).toFixed(2);
        // Display the converted value in the "converted" input field with a rupee symbol
        document.getElementById("converted").value = `₹ ${finalAmount}`;
    }
    
}

function clearFields() {
    // Select all text input fields (both "pounds" and "converted")
    let fieldArray = document.querySelectorAll("input[type='text']");
    
    
    // Loop through the array of input fields and clear their values
    for (let i = 0; i < fieldArray.length; i++) {
        fieldArray[i].value = "";
    }

    // Reset the dropdown menu to the default setting (the first option, which is hidden)
    document.getElementById("selection").selectedIndex = 0;
}
