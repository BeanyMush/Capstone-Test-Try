const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const submitBtn = form.querySelector(".submit");

nextBtn.addEventListener("click", () => {

    // Validation for empty fields
    const allInput = form.querySelectorAll(".first input:not(#suffix), .first select, .first textarea");
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

    // Validation for mobile number
    const mobileNumberInput = form.querySelector("#MobileNum");
    const mobileNumber = mobileNumberInput.value.trim();
    if (!/^\d{10,11}$/.test(mobileNumber)) {
        Swal.fire({
            title: "Please enter a valid mobile number with 10-11 digits.",
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

    // Validation for gender
    const genderInput = form.querySelector("#gender");
    const selectedGender = genderInput.value;
    const validGenders = ["Male", "Female", "Others"];
    if (!validGenders.includes(selectedGender)) {
        Swal.fire({
            title: "Please select a valid gender option.",
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

    // Validation for image upload
    const imageInput = form.querySelector("#IdUpload");
    const imageFile = imageInput.files[0];
    if (imageFile) {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const maxSize = 7 * 1024 * 1024; // 7MB in bytes
        const fileExtension = imageFile.name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            Swal.fire({
                title: "Please upload an image with JPG, JPEG, or PNG format.",
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
        if (imageFile.size > maxSize) {
            Swal.fire({
                title: "Please upload an image with size less than 7MB.",
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
    }

    form.classList.add('secActive');
});

// Additional function to ensure all fields on the second page are filled before submitting the form
submitBtn.addEventListener("click", () => {
    const allInput = form.querySelectorAll(".second input, .second select, .second textarea");
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

    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to validate password
    function validatePassword(password) {
        // Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);
    }

    // Add event listener to form submission
    form.addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Get email and password values
        const emailInput = form.querySelector("#email");
        const passwordInput = form.querySelector("#password");
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate email
        if (!validateEmail(email)) {
            Swal.fire({
                title: "Please enter a valid email address.",
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

        // Validate password
        if (!validatePassword(password)) {
            Swal.fire({
                title: "Please enter a password in the requested format.",
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

        // If email and password are valid, you can proceed with form submission
        // form.submit();
    });

});

// Back button
backBtn.addEventListener("click", () => form.classList.remove('secActive'));

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