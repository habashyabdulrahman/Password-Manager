// Elements
const emailInput = document.getElementById("email");
const websiteInput = document.getElementById("website");
const passwordInput = document.getElementById("password");
const addPasswordBtn = document.getElementById("addPassword");
const passwordList = document.getElementById("passwordList");
const searchInput = document.getElementById("search");
const clearAllBtn = document.getElementById("clearAll");

// Function to load passwords from localStorage and display them
function loadPasswords() {
  const passwords = JSON.parse(localStorage.getItem("passwords")) || []; // Get saved passwords or initialize empty array
  passwordList.innerHTML = ""; // Clear the current list

  passwords.forEach((item, index) => {
    // Create a div for each password entry
    const passwordItem = document.createElement("div");
    passwordItem.className = "password-item";
    passwordItem.innerHTML = `
      <div class="header">
        <div class="icon-user">
          <svg
            fill="currentColor"
            class="___12fm75w f1w7gpdv fez10in fg4l7m0"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96V17c0-.41.16-.78.44-1.06l2.58-2.58a3.72 3.72 0 0 1 .51-2.36H5.01Zm5.15 7.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"
              fill="currentColor"></path>
          </svg>
        </div>
        <div class="email">
          <span class="email-text" style="font-size: ${
            item.email.length > 24 ? "0.8rem" : "1rem"
          }">${item.email}</span>
        </div>
        <button class="icon-header" type="button" onclick="copyEmail('${
          item.email
        }')">
          <span class="icon-copy">
            <svg
              fill="currentColor"
              class="___12fm75w f1w7gpdv fez10in fg4l7m0"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z"
                fill="currentColor"></path>
              </svg>
          </span>
        </button>
      </div>
      <div class="content">
        <div>
          <div>
            <span class="item">Password</span>
            <div class="site">
              <span>${item.password}</span>
              <button class="icon" onclick="copyPassword('${item.password}')">
                <span class="icon-copy">
                  <svg
                    fill="currentColor"
                    class="___12fm75w f1w7gpdv fez10in fg4l7m0"
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.73V14.5A2.5 2.5 0 0 0 7.5 17h6.23A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z"
                      fill="currentColor"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <span class="item">Site</span>
              <div class="site">
                <span class="site-url">${item.website}</span>
                <button class="icon" onclick="window.open('${
                  item.website
                }', '_blank')">
                  <span class="icon-copy">
                    <svg
                      class="___12fm75w f1w7gpdv fez10in fg4l7m0"
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"
                        fill="currentColor"></path>
                  </svg>
                  </span>
                </button>
              </div>
          </div>
        </div>
        <div class="btn-t">
          <button class="btn" onclick="editPassword(${index})">Edit</button>
          <button class="btn" onclick="deletePassword(${index})">Delete</button>
        </div>
      </div>
    `;
    passwordList.appendChild(passwordItem); // Append the password item to the list
  });
}

// Function to add a new password to localStorage
function addPassword() {
  const email = emailInput.value.trim(); // Get site name input
  const website = websiteInput.value.trim(); // Get website input
  const password = passwordInput.value.trim(); // Get password input

  if (email && website && password) {
    const passwords = JSON.parse(localStorage.getItem("passwords")) || []; // Get existing passwords
    passwords.push({ email, website, password }); // Add new password
    localStorage.setItem("passwords", JSON.stringify(passwords)); // Save to localStorage
    emailInput.value = ""; // Clear input fields
    websiteInput.value = "";
    passwordInput.value = "";
    loadPasswords(); // Reload the password list
  } else {
    alert("Please fill in all fields."); // Alert if inputs are empty
  }
}

// Function to delete a specific password from localStorage
function deletePassword(index) {
  const passwords = JSON.parse(localStorage.getItem("passwords")) || []; // Get existing passwords
  passwords.splice(index, 1); // Remove the password at the specified index
  localStorage.setItem("passwords", JSON.stringify(passwords)); // Update localStorage
  loadPasswords(); // Reload the password list
}

// Function to edit a specific password
function editPassword(index) {
  const passwords = JSON.parse(localStorage.getItem("passwords")) || []; // Get existing passwords
  const item = passwords[index];
  const newPassword = prompt("Enter new password:", item.password); // Prompt user for new password

  if (newPassword) {
    passwords[index].password = newPassword; // Update the password
    localStorage.setItem("passwords", JSON.stringify(passwords)); // Save changes to localStorage
    loadPasswords(); // Reload the password list
  }
}

// Function to copy a password to the clipboard
function copyPassword(password) {
  navigator.clipboard
    .writeText(password)
    .then(() => {
      showPopup("Password copied!");
    })
    .catch((err) => {
      console.error("Failed to copy password:", err); // Log error if copying fails
    });
}

// Function to copy an email to the clipboard
function copyEmail(email) {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      showPopup("Email copied!");
    })
    .catch((err) => {
      console.error("Failed to copy email:", err); // Log error if copying fails
    });
}

// Function to show a popup message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.innerHTML = `<span class="popup-icon"><i class="fa-solid fa-check"></i></span> ${message}`;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 10);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 2000);
}

// Add CSS for the popup
const style = document.createElement("style");
style.textContent = `

`;
document.head.appendChild(style);


// Event listener for the search input field
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase(); // Get the search query
  const websiteItems = document.querySelectorAll(".password-item"); // Get all password items

  websiteItems.forEach((item) => {
    const website = item.querySelector(".site-url").textContent.toLowerCase(); // Get website text

    // Check if the query matches the website
    if (website.includes(query)) {
      item.style.display = "block"; // Show matching items
    } else {
      item.style.display = "none"; // Hide non-matching items
    }
  });
});


// Event listener for the Add Password button
addPasswordBtn.addEventListener("click", addPassword);

// Initial loading of passwords when the page is loaded
loadPasswords();
