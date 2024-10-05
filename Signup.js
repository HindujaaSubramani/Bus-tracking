/*const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add("active");
}*/

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

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
