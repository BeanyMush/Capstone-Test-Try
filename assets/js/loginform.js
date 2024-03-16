const form = document.querySelector("form");
const submitBtn = form.querySelector(".btn");

// Additional function to ensure all fields on the second page are filled before submitting the form
submitBtn.addEventListener("click", () => {
    const allInput = form.querySelectorAll(".fields input");
    let allFieldsFilled = true;

    allInput.forEach(input => {
        if (input.value.trim() === "") {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        Swal.fire({
            title: "Please fill out all fields.",
            heightAuto: false,
            position: "top",
            showClass: {
                popup: "animate__animated animate__fadeInDown animate__faster"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp animate__faster"
            }
        });
        return;
    }

});

// Show password
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function() {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    
    // Toggle eye icon class
    if (type === "password") {
        showPassword.classList.remove("fa-eye-slash");
        showPassword.classList.add("fa-eye");
    } else {
        showPassword.classList.remove("fa-eye");
        showPassword.classList.add("fa-eye-slash");
    }
});

// JavaScript code to remove preloader after a few seconds
window.addEventListener("load", function() {
    // Set a timeout to remove the preloader after 3 seconds (adjust the time as needed)
    setTimeout(function() {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none"; // Hide the preloader
        }
    }, 1000); // 1000 milliseconds = 1 second
});