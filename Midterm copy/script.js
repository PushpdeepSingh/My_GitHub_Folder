// script.js

// helper to read a cookie by name
function getCookie(name) {
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
}

// helper to write a cookie that lasts 7 days
function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 7;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
}

document.addEventListener('DOMContentLoaded', () => {
  // try to load the saved accent color
  let userColor = getCookie('color');

  // if missing, prompt until they pick 0 or 1
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

  // apply the chosen accent color
  document.body.style.backgroundColor = userColor;
});
