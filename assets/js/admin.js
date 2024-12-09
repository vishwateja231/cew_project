document.addEventListener("DOMContentLoaded", () => {
    const users = [
      { username: "user1", email: "user1@example.com", role: "Employee" },
      { username: "admin", email: "admin@example.com", role: "Admin" },
    ];
  
    const userTable = document.getElementById("userTable");
  
    function renderUsers() {
      userTable.innerHTML = users
        .map((user, index) => `
          <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
              <button onclick="deleteUser(${index})">Delete</button>
            </td>
          </tr>
        `)
        .join("");
    }
  
    window.deleteUser = (index) => {
      users.splice(index, 1);
      renderUsers();
    };
  
    renderUsers();
  });
  