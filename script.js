// Reference elements
const btn = document.getElementById("submit");
const checkBox = document.getElementById("checkbox");
const existingUserContainer = document.getElementById("existing-user-container");

// Check if saved details exist in localStorage and display "Login as existing user" button
function checkForExistingUser() {
	const savedUsername = localStorage.getItem("username");
	const existing = document.getElementById("#existing");
	if (savedUsername) {
		existing.style.display = "block";		
			existingUserButton.addEventListener("click", () => {
				alert(`Logged in as ${savedUsername}`);
			});
		}
	}

// Handle form submission
btn.addEventListener("click", () => {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (checkBox.checked) {
		// Save username and password in localStorage
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		// Remove saved details
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	alert(`Logged in as ${username}`);

	// Check for existing user after login
	checkForExistingUser();
});

// Run check on page load
checkForExistingUser();
