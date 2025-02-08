const auth = firebase.auth();

// Register User
function register() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Registration Successful!");
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch(error => {
            alert(error.message);
        });
}

// Login User
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch(error => {
            alert(error.message);
        });
}

// Logout User
function logout() {
    auth.signOut().then(() => {
        alert("Logged out!");
        window.location.href = "index.html"; // Redirect to login
    });
}

// Detect Authentication State
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("userInfo").innerText = `Logged in as: ${user.email}`;
    } else {
        document.getElementById("userInfo").innerText = "Not logged in.";
    }
});
