// Get the login form element
const loginForm = document.querySelector('#login-form');

// Add event listener to the login form
loginForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevent form submission

  // Get the entered username and password values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Perform basic validation
  if (username && password) {
    // Simulate login functionality
    // Replace this with your actual login logic
    if (username === 'admin' && password === 'password') {
      // Successful login, redirect to the home page or perform necessary actions
      window.location.href = 'home.html';
    } else {
      // Invalid credentials, display an error message
      alert('Invalid username or password');
    }
  } else {
    // Display an error message for missing credentials
    alert('Please enter a username and password');
  }
});
