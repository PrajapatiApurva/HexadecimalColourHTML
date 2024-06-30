// Function to handle color selection from the color picker
function myColor() {
    // Get the value returned by the color picker
    var color = document.getElementById('colorPicker').value;

    // Set the color as the background of the body
    document.body.style.backgroundColor = color;

    // Take the hex code and update an input field with the id 'box'
    document.getElementById('box').value = color;
}

// Function to change the background color based on user input
function changeColor(event) {
    // Get the color value from the input field with the id 'box'
    const color = document.getElementById('box').value;

    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        // Check if the entered color is a valid hex code
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            // Set the body background color to the entered color
            document.body.style.backgroundColor = color;

            // Set the color picker value to the entered color
            document.getElementById('colorPicker').value = color;
        } else {
            // Display an alert for invalid hex code
            alert("Invalid hex code. Please enter a valid 6-digit hex code (e.g., #RRGGBB).");
        }
    }
}

// When the user interacts with the color picker (input event),
// the myColor() function is called
document.getElementById('colorPicker').addEventListener('input', myColor);