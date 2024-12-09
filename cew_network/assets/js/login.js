document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Static login credentials
    const adminCredentials = { username: "admin", password: "admin123" };
    const employeeCredentials = { username: "employee", password: "emp123" };
  
    if (username === adminCredentials.username && password === adminCredentials.password) {
      window.location.href = "admin.html"; // Redirect to admin dashboard
    } else if (username === employeeCredentials.username && password === employeeCredentials.password) {
      window.location.href = "employee.html"; // Redirect to employee dashboard
    } else {
      alert("Unauthorized login! Please check your username and password.");
    }
  });
  