document.getElementById("subscription-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;

    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        window.location.href = "thanks.html"; 
    }
});
