// Responsive Navigation Bar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰ Menu";
    navToggle.classList.add("nav-toggle");
    document.querySelector("nav").prepend(navToggle);

    navToggle.addEventListener("click", function() {
        document.querySelector("nav ul").classList.toggle("active");
    });
});

// Image Slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".project img");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
document.addEventListener("DOMContentLoaded", showSlides);

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});
