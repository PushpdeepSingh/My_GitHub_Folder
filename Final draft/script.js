// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch stored values
    let name = localStorage.getItem('fernName');
    let theme = localStorage.getItem('fernTheme');
  
    // Prompt once if missing
    if (!name) {
      name = prompt('Welcome! What’s your name?') || 'Friend';
      localStorage.setItem('fernName', name);
    }
    if (!theme) {
      theme = confirm('Do you prefer dark mode?') ? 'dark' : 'light';
      localStorage.setItem('fernTheme', theme);
    }
  
    // Apply theme class to <body>
    document.body.classList.add(theme + '-mode');
  
    // Insert greeting
    const greetEl = document.querySelector('#greeting');
    if (greetEl) {
      greetEl.textContent = `Welcome back, ${name}!`;
    }
  });
  