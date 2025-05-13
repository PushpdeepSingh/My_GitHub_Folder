// script.js

// Helper: read a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Helper: set a cookie for `days` days
function setCookie(name, value, days) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) Try to get existing cookies
  let userName       = getCookie('name');
  let selectedColor  = getCookie('selectedColor');

  // 2) If missing, prompt and set them
  if (!userName || !selectedColor) {
    // Prompt for name
    userName = prompt("Welcome to Fern and Foam! What's your name?") || 'Friend';
    setCookie('name', userName, 7);

    // Prompt for color choice
    const colors = ["#fdf6f0", "#fff7e6", "#f5fff5"]; // cream, latte, mint
    let idx;
    do {
      idx = parseInt(prompt(
        "Pick a background color:\n0 = cream\n1 = latte\n2 = mint"
      ), 10);
    } while (isNaN(idx) || idx < 0 || idx > 2);

    selectedColor = colors[idx];
    setCookie('selectedColor', selectedColor, 7);
  }

  // 3) Apply greeting (requires an element <div id="welcome-message"></div> in your HTML)
  const welcomeEl = document.getElementById('welcome-message');
  if (welcomeEl) {
    welcomeEl.textContent = `Welcome back, ${userName}!`;
  }

  // 4) Apply the background color
  document.body.style.backgroundColor = selectedColor;
});
