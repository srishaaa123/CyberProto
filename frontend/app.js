// Handle User Registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const secret_key = document.getElementById("secret_key").value;

    try {
        const response = await fetch("/api/register", {  // Add "/api" prefix
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, secret_key }),
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById("registerResponse").innerHTML = `
                <strong>Success:</strong> User registered successfully.<br>
                Public Key: ${data.public_key}
            `;
        } else {
            const error = await response.json();
            document.getElementById("registerResponse").innerHTML = `<strong>Error:</strong> ${error.detail}`;
        }
    } catch (err) {
        document.getElementById("registerResponse").innerHTML = `<strong>Error:</strong> ${err.message}`;
    }
});

// Handle User Authentication
document.getElementById("authForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const authUsername = document.getElementById("authUsername").value;
    const C = parseInt(document.getElementById("C").value);
    const c = parseInt(document.getElementById("c").value);
    const s = parseInt(document.getElementById("s").value);

    try {
        const response = await fetch("/api/authenticate", {  // Add "/api" prefix
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: authUsername, C, c, s }),
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById("authResponse").innerHTML = `<strong>Success:</strong> ${data.authenticated ? "Authenticated!" : "Failed."}`;
        } else {
            const error = await response.json();
            document.getElementById("authResponse").innerHTML = `<strong>Error:</strong> ${error.detail}`;
        }
    } catch (err) {
        document.getElementById("authResponse").innerHTML = `<strong>Error:</strong> ${err.message}`;
    }
});
