document
  .getElementById("loginForm")
  .addEventListener("submit", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      authentication
    } else {
      alert("Please fill in all fields.");
    }
  });

  function authentication(){
    alert(`Logged in with\nEmail: ${email}\nPassword: ${password}`);

  }
document
  .getElementById("forgotPasswordButton")
  .addEventListener("click", function () {
    alert("Forgot password functionality will be implemented here.");

  });
