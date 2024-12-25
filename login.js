
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const user = JSON.parse(localStorage.getItem("user"));

    
    if (user && user.email === email && user.password === password) {
        alert("Login successful!");
        localStorage.setItem("isAuthenticated", "true"); 
        window.location.href = "index.html"; 
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
