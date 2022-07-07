let btn = document.querySelector("#theme");

function setTheme() {
  console.log(btn.value);
  let test = btn.value;
  setTheme(test);
}
// let switches = document.getElementsByClassName("switch");
let style = localStorage.getItem("style");

if (style == null) {
  setTheme("theme-light");
} else {
  setTheme(style);
}

function setTheme(theme) {
  if (theme == 1) {
    document.documentElement.className = "theme-default";
  } else if (theme == 2) {
    document.documentElement.className = "theme-light";
  } else if (theme == 3) {
    document.documentElement.className = "theme-dark";
  }
  localStorage.setItem("style", theme);
}
