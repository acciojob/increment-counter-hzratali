//your JS code here. If required.
const counterElement = document.getElementById('counter');
// Get the button element
const incrementBtn = document.getElementById('incrementBtn');
// Add click event listener to the button
incrementBtn.addEventListener('click', function() {
    // Get the current counter value and convert it to a number
    let counterValue = parseInt(counterElement.innerText);
    // Display an alert with the current counter value
    alert(counterValue);
    // Increment the counter value
    counterValue++;
    // Update the counter element with the new value
    counterElement.innerText = counterValue;
});