// Handle Registration
function handleRegister() {
  const firstName = document.getElementById('firstName')?.value.trim();
  const lastName = document.getElementById('lastName')?.value.trim();
  const department = document.getElementById('department')?.value;

  if (!firstName || !lastName || !department) {
    alert("Please fill in all required fields!");
    return;
  }

  alert(`✅ Registration Successful!\n\nName: ${firstName} ${lastName}\nDepartment: ${department}`);
  
  // Optional: Redirect to login after successful registration
  // window.location.href = "login.html";
}

// Handle Login
function handleLogin() {
  const username = document.getElementById('username')?.value.trim();
  const password = document.getElementById('password')?.value;

  if (!username || !password) {
    alert("Please enter both username and password!");
    return;
  }

  alert(`✅ Login Successful!\n\nWelcome back, ${username}!`);
  // You can redirect to dashboard here in real project
}

// Clear form function
function clearForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    if (input.type === 'radio' || input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
}

// Allow Enter key to submit
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) handleRegister();
    if (loginForm) handleLogin();
  }
});