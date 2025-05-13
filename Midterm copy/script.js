// script.js

// Read a cookie by name
function getCookie(name) {
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
}

// Write a cookie lasting 7 days
function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 7;  // seconds in 7 days
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) Name
  let userName = getCookie('userName');
  if (!userName) {
    userName = prompt("Welcome! What’s your name?") || 'Friend';
    setCookie('userName', userName);
  }

  // Display greeting if you have a welcome-message element
  const welcomeEl = document.getElementById('welcome-message');
  if (welcomeEl) {
    welcomeEl.textContent = `Welcome back, ${userName}!`;
  }

  // 2) Accent Color
  let userColor = getCookie('color');
  if (!userColor) {
    const colors = ["#fdf6f0", "#36454F"]; // 0 = cream, 1 = dark slate
    let idx;
    do {
      idx = parseInt(
        prompt(
          "Pick a background color accent:\n0 = cream\n1 = dark slate"
        ),
        10
      );
    } while (isNaN(idx) || idx < 0 || idx > 1);

    userColor = colors[idx];
    setCookie('color', userColor);
  }

  // Apply the chosen accent color
  document.body.style.backgroundColor = userColor;
});
