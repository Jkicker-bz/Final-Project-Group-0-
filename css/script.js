// Get references to the image elements and the toggle button
const inputImage = document.getElementById('inputImage');
const outputImage = document.getElementById('outputImage');
const toggleButton = document.getElementById('toggleButton');

// Set initial state
let inputState = false; // false for 'off' (0), true for 'on' (1)

// Function to update the images based on the input state
function updateImages() {
    // Update input image based on input state
    inputImage.src = inputState ? 'on.png' : 'off.png';
    
    // Update output image (NOT A)
    outputImage.src = inputState ? 'off.png' : 'on.png';
}

// Add event listener to the button to toggle the input state
toggleButton.addEventListener('click', () => {
    inputState = !inputState; // Toggle the input state
    updateImages(); // Update the images
});

// Initialize images on page load
updateImages();