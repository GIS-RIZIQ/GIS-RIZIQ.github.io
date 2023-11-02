// Get the checkbox input and the login container
const checkbox = document.getElementById('show');
const loginContainer = document.querySelector('.container');

// Add an event listener to the checkbox to show/hide the login form
checkbox.addEventListener('change', function() {
  if (this.checked) {
    loginContainer.style.display = 'block';
  } else {
    loginContainer.style.display = 'none';
  }
});
