// script.js

// 1) Helper to read a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
      const [key, value] = c.split('=');
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }
  
  // 2) Helper to write a cookie (7-day expiry)
  function setCookie(name, value) {
    const maxAge = 60 * 60 * 24 * 7; // 7 days
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // 3) Try to read stored values
    let userName  = getCookie('name');
    let userTheme = getCookie('theme');
  
    // 4) If missing, prompt and store
    if (!userName || !userTheme) {
      userName  = prompt("Welcome to Fern & Foam! What's your name?") || 'Friend';
      userTheme = prompt("1 for dark or 2 for light theme?").toLowerCase();
      if (userTheme !== 'dark' && userTheme !== 'light') userTheme = 'light';
  
      setCookie('name', userName);
      setCookie('theme', userTheme);
    }
  
    // 5) Show greeting if element exists
    const welcomeEl = document.getElementById('welcome-message');
    if (welcomeEl) {
      welcomeEl.textContent = `Welcome back, ${userName}!`;
    }
  
    // 6) Apply theme class to <body>
    const colors = ["#fdf6f0", "#023020"];
    if (userTheme === 'dark') {
        const userInfo = {
            name: userName,
            selectedColor: colors[colorChoice]
          };
          console.log("The first color in the array is:", colors[0]);
          document.body.style.backgroundColor = userInfo.selectedColor;
  });
  