// Select the elements to manipulate
const title = document.getElementById('title');
const button = document.getElementById('changeButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the text content of the h1 element
  title.textContent = "You've Changed Me!";

  // Change the style of the h1 element
  title.style.color = "#ff6347"; // Change text color to tomato
  title.style.fontSize = "4rem"; // Increase font size
  title.style.fontStyle = "italic"; // Add italic style
});
