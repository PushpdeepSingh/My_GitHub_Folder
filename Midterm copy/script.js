// Function to toggle between light mode and dark mode
function changeTheme() {
  document.body.classList.toggle("dark-mode");
}

// Run this code when the page loads
window.onload = function () {
  const hasSeenAlert = getCookie("seenAlert");
  if (!hasSeenAlert) {
      alert("Welcome to my Chess Final Project with JavaScript!");
      document.cookie = `seenAlert=true; max-age=${60 * 60 * 24 * 7}; path=/`;
  }

  console.log("CSS + JavaScript is powerful!");

  let userName = getCookie("name");
  if (!userName) {
      userName = prompt("What is your name?");
      document.cookie = `name=${encodeURIComponent(userName)}; max-age=${60 * 60 * 24 * 7}; path=/`;
  } else {
      const hasGreeted = getCookie("greeted");
      if (!hasGreeted) {
          alert(`Welcome back, ${userName}`);
          document.cookie = `greeted=true; max-age=${60 * 60 * 24 * 7}; path=/`;
      }
      const welcome = document.getElementById("welcome-message");
      if (welcome) {
          welcome.textContent = `Welcome back, ${userName}`;
      }
  }

  const userTheme = getCookie("theme");
  if (!userTheme) {
      const themePref = prompt("Do you prefer dark or light theme?").toLowerCase();
      document.cookie = `theme=${themePref}; max-age=${60 * 60 * 24 * 7}; path=/`;
  }

  const finalTheme = getCookie("theme");
  if (finalTheme === "dark") {
      document.body.classList.add("dark-mode");
  }
};

// Check and retrieve cookie values
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
      const [key, value] = c.split("=");
      if (key === name) return decodeURIComponent(value);
  }
  return null;
}

