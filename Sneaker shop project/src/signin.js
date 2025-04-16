// Select DOM elements with rhyming IDs
const notificationFlow = document.getElementById('notification-flow');
const signinSubmitFlow = document.getElementById('signin-submit-flow');
const usernameFlow = document.getElementById('username-flow');
const passwordFlow = document.getElementById('password-flow');

// Function to show notification messages
function showNotificationFlow(message) {
    // Set notification text and show
    notificationFlow.textContent = message;
    notificationFlow.classList.add('show');

    // Hide notification after 2 seconds
    setTimeout(() => {
        notificationFlow.classList.remove('show');
    }, 2000);
}

// Function to validate sign-in form
function validateSignInFlow() {
    const username = usernameFlow.value.trim();
    const password = passwordFlow.value.trim();

    // Basic validation checks
    if (!username) {
        showNotificationFlow('Please enter a username');
        return false;
    }
    if (!password) {
        showNotificationFlow('Please enter a password');
        return false;
    }

    return true;
}

// Function to handle sign-in submission
function handleSignInFlow() {
    signinSubmitFlow.addEventListener('click', (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!validateSignInFlow()) return;

        // Simulate authentication (replace with actual auth in production)
        const username = usernameFlow.value.trim();
        const user = { username };

        // Save user to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Show success notification
        showNotificationFlow('Signed in successfully!');

        // Redirect to main page after 1 second
        setTimeout(() => {
            window.location.href = 'webstructure.html';
        }, 1000);
    });
}

// Initialize sign-in functionality
handleSignInFlow();

// Note: For actual authentication, replace the simulated authentication in handleSignInFlow
// with your authentication system (e.g., Firebase, OAuth, or a backend API).
// 1. Send username and password to your auth endpoint.
// 2. Handle response to store user session (e.g., token, user data).
// 3. Update localStorage or session storage with actual user data.