document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    
    if (!name || !contact || !email || !address) {
        alert("Please fill out all fields!");
        return;
    }

    
    alert("Thank you for your order! We will contact you shortly.");

    
    localStorage.clear();
    window.location.href = "thankyou.html";
});
