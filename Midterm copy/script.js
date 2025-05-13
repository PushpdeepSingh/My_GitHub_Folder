// script.js

// Helper to read a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Helper to write a cookie (7-day expiry)
function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Try to read stored values
  let userName  = getCookie('name');
  let userTheme = getCookie('theme');
  let userColor = getCookie('color');

  // If missing any, prompt once and store
  if (!userName) {
    userName = prompt("Welcome to Fern & Foam! What's your name?") || 'Friend';
    setCookie('name', userName);
  }
  if (!userTheme) {
    userTheme = prompt("Do you prefer dark or light theme? (dark/light)").toLowerCase();
    if (userTheme !== 'dark' && userTheme !== 'light') userTheme = 'light';
    setCookie('theme', userTheme);
  }
  if (!userColor) {
    const colors = ["#fdf6f0", "#36454F"]; // 0 = cream, 1 = dark slate
    let idx;
    do {
      idx = parseInt(prompt(
        "Pick a background color accent:\n0 = cream\n1 = dark slate"
      ), 10);
    } while (isNaN(idx) || idx < 0 || idx > 1);
    userColor = colors[idx];
    setCookie('color', userColor);
  }

  // Show greeting if placeholder exists
  const welcomeEl = document.getElementById('welcome-message');
  if (welcomeEl) welcomeEl.textContent = `Welcome back, ${userName}!`;

  // Apply theme class
  if (userTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Apply chosen background accent color
  document.body.style.backgroundColor = userColor;
});
