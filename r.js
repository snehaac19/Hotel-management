// Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform validation and send data to the server
    // For demonstration purposes, let's just log the data to the console
    console.log("Name: " + name + ", Email: " + email + ", Password: " + password);
  });
  
  // Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform validation and send data to the server
    // For demonstration purposes, let's just log the data to the console
    console.log("Email: " + email + ", Password: " + password);
  });
  