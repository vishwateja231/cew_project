document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin123") {
      alert("Welcome Admin!");
      window.location.href = "admin.html";
    } else if (username === "employee" && password === "emp123") {
      alert("Welcome Employee!");
      window.location.href = "employee.html";
    } else {
      alert("Invalid credentials!");
    }
  });
  