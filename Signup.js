const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const registerForm = document.querySelector('#register-form');

// Ensure elements exist before adding event listeners
if (registerLink) {
    registerLink.onclick = () => {
        wrapper.classList.add("active"); // Switch to register form
    };
}

if (loginLink) {
    loginLink.onclick = () => {
        wrapper.classList.remove("active"); // Switch back to login form
    };
}

// Register Form Submission
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.querySelector('#register-username').value;
        const email = document.querySelector('#register-email').value;
        const password = document.querySelector('#register-password').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Registration Successful:', data);
                // Optionally redirect the user or show a success message
                alert('Registration successful! You can now log in.');
                wrapper.classList.remove("active"); // Switch back to login form
            } else {
                console.error('Registration Failed:', data.message);
                alert('Registration failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering. Please try again.');
        }
    });
}
