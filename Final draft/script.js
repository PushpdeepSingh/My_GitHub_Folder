const colors = ["#fdf6f0", "#fff7e6", "#f5fff5"];
const userName = prompt("Welcome to Fern and Foam! What's your name?");
const colorChoice = prompt("Pick a background color: 0 for cream, 1 for latte, 2 for mint");
const userInfo = {
  name: userName,
  selectedColor: colors[colorChoice]
};
console.log("The first color in the array is:", colors[0]);
document.body.style.backgroundColor = userInfo.selectedColor;