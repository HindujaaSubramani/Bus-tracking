const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('#login-form');

// Ensure elements exist before adding event listeners
if (registerLink) {
    registerLink.onclick = () => {
        wrapper.classList.add("active");
    };
}

if (loginLink) {
    loginLink.onclick = () => {
        wrapper.classList.remove("active");
    };
}

// Login Form Submission
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login Successful:', data);
                // Optionally store token in localStorage or sessionStorage
                localStorage.setItem('authToken', data.token);
                alert('Login successful!');
                // Redirect to dashboard or protected route
                window.location.href = '/dashboard';
            } else {
                console.error('Login Failed:', data.message);
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in. Please try again.');
        }
    });
}
