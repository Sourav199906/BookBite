if (!localStorage.getItem("isAuthenticated")) {
    window.location.href = "login.html";
}
let currentImageIndex = 0;

const images = [
    "c:\Users\SOURAV\Downloads\Humayun2.jpg",
    "c:\Users\SOURAV\Downloads\h1.jpg",
    "c:\Users\SOURAV\Downloads\s1.1531806460.jpg"
];

function swapImage() {
    const featureImage = document.getElementById("feature-image");
    featureImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

window.onload = () => {
    swapImage(); 
    setInterval(swapImage, 3000); 
};
const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
});

document.getElementById("subscribe-button").addEventListener("click", () => {
    window.location.href = "subscription.html"; 
});




if (!localStorage.getItem("isAuthenticated")) {
        window.location.href = "login.html";
}
