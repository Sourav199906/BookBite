
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    localStorage.setItem("user", JSON.stringify({ username, email, password }));

    
    alert("Sign-up successful! Please log in.");
    window.location.href = "login.html";
});
