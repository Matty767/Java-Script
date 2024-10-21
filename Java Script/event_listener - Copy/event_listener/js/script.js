window.onload = function () {
    let counter = 0; // Initialising the counter variable to store the cumulative count

    // Adding an event listener to the 'Click++' button that will trigger the storeClickCount function
    document.getElementById("btn").addEventListener("click", storeClickCount);

    // Adding an event listener to the 'Reset' button that will trigger the reset function
    document.getElementById("reset").addEventListener("click", reset);
}

// Function to store and display the click count based on the user's input
function storeClickCount() {
    // Retrieving the user's input value and converting it to a number
    let userInput = Number(document.getElementById('userinput').value);  

    // Validating the input to ensure the number is between 1 and 10
    if (userInput < 1 || userInput > 10) {
        alert("Number not in range (1-10)"); // Alerting the user if input is out of range
        return false; // Exiting the function if the input is invalid
    }

    // Incrementing the counter by the user's input
    counter += userInput;

    // Selecting the 'output' paragraph and updating its content to show the increment
    let dspOutput = document.getElementById("output"); 
    dspOutput.innerHTML = `You have chosen to increment the counter by <span class="countby">${userInput}</span>`;

    // Selecting the element that displays the counter and updating it with the new count
    let dspUserCount = document.querySelector(".countdisplay"); 
    dspUserCount.innerHTML = counter;
}

// Function to reset the counter and update the display elements
function reset() {
    // Clearing the input field by setting its value to an empty string
    document.getElementById('userinput').value = ""; 

    // Resetting the counter variable to 0
    counter = 0;

    // Resetting the 'output' paragraph to its default message
    let countOutput = document.getElementById("output"); 
    countOutput.innerHTML = `Output here...`; 

    // Resetting the counter display to 0
    let countUpdate = document.querySelector(".countdisplay"); 
    countUpdate.innerHTML = counter;
}
