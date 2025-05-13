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
    // 1) Try to read stored values
    let userName  = getCookie('name');
    let userTheme = getCookie('theme');
    let userColor = getCookie('color');
  
    // 2) If missing any, prompt and store
    if (!userName || !userTheme || !userColor) {
      // Name
      if (!userName) {
        userName = prompt("Welcome to Fern & Foam! What's your name?") || 'Friend';
        setCookie('name', userName);
      }

  
    // 3) Show greeting if element exists
    const welcomeEl = document.getElementById('welcome-message');
    if (welcomeEl) {
      welcomeEl.textContent = `Welcome back, ${userName}!`;
    }
  
    // 4) Apply theme class to <body>
    if (userTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  
    // 5) Apply chosen background color accent
    document.body.style.backgroundColor = userColor;
  });
  