// script.js

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [k, v] = c.split('=');
    if (k === name) return decodeURIComponent(v);
  }
  return null;
}

function setCookie(name, value, days) {
  const maxAge = days*24*60*60;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; max-age=0; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
  // If URL contains ?reset, clear cookies
  if (window.location.search.includes('reset')) {
    deleteCookie('name');
    deleteCookie('selectedColor');
  }

  let userName      = getCookie('name');
  let selectedColor = getCookie('selectedColor');

  // Prompt if missing
  if (!userName || !selectedColor) {
    // Name
    userName = prompt("Welcome to Fern & Foam! What's your name?") || 'Friend';
    setCookie('name', userName, 7);

    // Color choice (2 options)
    const colors = ["#fdf6f0", "#36454F"]; // cream or dark slate
    let idx;
    do {
      idx = parseInt(prompt(
        "Pick a background color:\n0 = cream\n1 = dark slate"
      ), 10);
    } while (isNaN(idx) || idx<0 || idx>1);

    selectedColor = colors[idx];
    setCookie('selectedColor', selectedColor, 7);
  }

  // Apply greeting
  const welcomeEl = document.getElementById('welcome-message');
  if (welcomeEl) welcomeEl.textContent = `Welcome back, ${userName}!`;

  // Apply background
  document.body.style.backgroundColor = selectedColor;
});
