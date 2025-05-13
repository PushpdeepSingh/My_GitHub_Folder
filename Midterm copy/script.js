// script.js

// Helper: read a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, value] = c.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }
  
  // Function to toggle between light mode and dark mode
  function changeTheme() {
    document.body.classList.toggle("dark-mode");
    const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    document.cookie = `theme=${newTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;
  }
  
  window.onload = function () {
    // 1. Show welcome alert only once per week
    const hasSeenAlert = getCookie("seenAlert");
    if (!hasSeenAlert) {
      alert("Welcome to Fern & Foam!");
      document.cookie = `seenAlert=true; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
  
    console.log("CSS + JavaScript is powerful!");
  
    // 2. Handle user name and greeting
    let userName = getCookie("name");
    if (!userName) {
      userName = prompt("Welcome! What's your name?") || "Friend";
      document.cookie = `name=${encodeURIComponent(userName)}; max-age=${60 * 60 * 24 * 7}; path=/`;
    } else {
      const hasGreeted = getCookie("greeted");
      if (!hasGreeted) {
        alert(`Welcome back, ${userName}!`);
        document.cookie = `greeted=true; max-age=${60 * 60 * 24 * 7}; path=/`;
      }
    }
    const welcomeEl = document.getElementById("welcome-message");
    if (welcomeEl) {
      welcomeEl.textContent = `Welcome back, ${userName}!`;
    }
  
    // 3. Apply stored theme or ask if none
    let theme = getCookie("theme");
    if (!theme) {
      theme = prompt("Do you prefer dark or light mode?").toLowerCase();
      if (theme !== "dark" && theme !== "light") theme = "light";
      document.cookie = `theme=${theme}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // 4. Wire up a theme-toggle button if present
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", changeTheme);
    }
  };
  