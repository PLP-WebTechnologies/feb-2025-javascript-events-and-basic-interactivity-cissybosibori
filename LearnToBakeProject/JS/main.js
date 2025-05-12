// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // 1. Change Content Dynamically
    const heading = document.querySelector("header h1");
    heading.textContent = "Ready to Bake Something Awesome?";

    // 2. Modify CSS Styles via JavaScript
    const homeSection = document.getElementById("home");
    homeSection.style.backgroundColor = "#fff3e6";
    homeSection.style.padding = "20px";
    homeSection.style.borderRadius = "10px";

    // 3. Add a button to toggle an extra tip
    const tipButton = document.createElement("button");
    tipButton.textContent = "Show Baking Tip";
    tipButton.style.padding = "10px";
    tipButton.style.marginTop = "10px";
    tipButton.style.backgroundColor = "#ff9966";
    tipButton.style.color = "white";
    tipButton.style.border = "none";
    tipButton.style.borderRadius = "5px";
    tipButton.style.cursor = "pointer";

    homeSection.appendChild(tipButton);

    // Tip message element
    const tipMessage = document.createElement("p");
    tipMessage.textContent = "✨ Tip: Always preheat your oven before baking!";
    tipMessage.style.display = "none";
    tipMessage.style.fontStyle = "italic";
    tipMessage.style.marginTop = "10px";

    homeSection.appendChild(tipMessage);

    // 4. Toggle tip visibility
    tipButton.addEventListener("click", function () {
        if (tipMessage.style.display === "none") {
            tipMessage.style.display = "block";
            tipButton.textContent = "Hide Baking Tip";
        } else {
            tipMessage.style.display = "none";
            tipButton.textContent = "Show Baking Tip";
        }
    });
});
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    const terms = document.getElementById("terms");
    if (!terms.checked) {
        e.preventDefault();
        alert("You must agree to the terms to register.");
    }
});
const form = document.querySelector("form");
    form.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            console.log("Enter key pressed in form.");
        }
    });
    const secretHeading = document.querySelector("header h1");
    secretHeading.addEventListener("dblclick", () => {
        alert("🎉 Secret Unlocked! Here's your secret baking ingredient: Love ❤️");
    });
// Button to change color and text
    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Click to Change Me!";
    changeBtn.style.backgroundColor = "#ff9966";
    changeBtn.style.color = "white";
    changeBtn.style.margin = "10px";
    homeSection.appendChild(changeBtn);

    changeBtn.addEventListener("click", function () {
        this.textContent = "You Clicked Me!";
        this.style.backgroundColor = "#66cc66";
    });

    // Image Slideshow
    const gallery = document.createElement("div");
    gallery.id = "gallery";
    gallery.style.textAlign = "center";
    const images = [
        "https://images.pexels.com/photos/1359309/pexels-photo-1359309.jpeg",
        "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "https://images.pexels.com/photos/4109994/pexels-photo-4109994.jpeg"
    ];
    let currentImage = 0;
    const imgElement = document.createElement("img");
    imgElement.src = images[currentImage];
    imgElement.width = 400;
    imgElement.style.borderRadius = "10px";
    imgElement.style.transition = "opacity 0.5s ease-in-out";
    gallery.appendChild(imgElement);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next Image";
    nextBtn.style.marginTop = "10px";
    nextBtn.style.padding = "10px";
    nextBtn.style.backgroundColor = "#ffa07a";
    nextBtn.style.border = "none";
    nextBtn.style.borderRadius = "5px";
    nextBtn.style.cursor = "pointer";
    nextBtn.addEventListener("click", () => {
        currentImage = (currentImage + 1) % images.length;
        imgElement.style.opacity = 0;
        setTimeout(() => {
            imgElement.src = images[currentImage];
            imgElement.style.opacity = 1;
        }, 300);
    });

    gallery.appendChild(nextBtn);
    homeSection.appendChild(gallery);
/** ------------------------------
     *  FORM VALIDATION 📋✅
     * ------------------------------ */
    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let errors = [];

        if (name === "") errors.push("Name is required.");
        if (!emailRegex.test(email)) errors.push("Email is invalid.");
        if (password.length < 8) errors.push("Password must be at least 8 characters.");

        if (errors.length > 0) {
            e.preventDefault();
            alert("Please fix the following:\n" + errors.join("\n"));
        }
    });
/** ------------------------------
 *  TABS INTERACTION
 * ------------------------------ */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

/** ------------------------------
 *  REAL-TIME FORM VALIDATION
 * ------------------------------ */
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailInput.style.borderColor = emailRegex.test(emailInput.value) ? "green" : "red";
});

passwordInput.addEventListener("input", () => {
    passwordInput.style.borderColor = passwordInput.value.length >= 8 ? "green" : "red";
});
