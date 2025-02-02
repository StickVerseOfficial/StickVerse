// Open the popup
function openPopup(type) {
    document.getElementById("popup-overlay").style.display = "flex";

    if (type === "login") {
        document.getElementById("popup-title").innerText = "Login";
        document.getElementById("popup-action-btn").innerText = "Login";
        document.getElementById("popup-toggle-text").innerHTML = 
            `Don't have an account? <a href="#" onclick="togglePopup()">Sign Up</a>`;
    } else {
        document.getElementById("popup-title").innerText = "Sign Up";
        document.getElementById("popup-action-btn").innerText = "Sign Up";
        document.getElementById("popup-toggle-text").innerHTML = 
            `Already have an account? <a href="#" onclick="togglePopup()">Login</a>`;
    }
}

// Toggle between login and sign-up
function togglePopup() {
    let title = document.getElementById("popup-title").innerText;

    if (title === "Login") {
        openPopup("signup");
    } else {
        openPopup("login");
    }
}

// Close the popup
function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}
