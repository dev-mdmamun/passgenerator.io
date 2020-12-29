const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolElement = document.getElementById("symbol");
const generateElement = document.getElementById("generate");
const copyElement = document.getElementById("copy");
const passareaElement = document.getElementById("passarea");
const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbol = "!@#$%^&*()_-+=|}{][?/.,";

generateElement.addEventListener("click", generatePassword);
copyElement.addEventListener("click", () => {
  document.getElementById("massage").innerText =
    "Password copied to clipboard";
});

function getLowerCase() {
  return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}
function getUpperCase() {
  return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
  const length = lengthElement.value;

  let password = "";

  if (uppercaseElement.checked) {
    password += getUpperCase();
  }

  if (lowercaseElement.checked) {
    password += getLowerCase();
  }

  if (numbersElement.checked) {
    password += getNumbers();
  }

  if (symbolElement.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < length; i++) {
    const x = generateX();
    password += x;
  }

  passareaElement.innerText = password;
}

function generateX() {
  const xs = [];
  if (uppercaseElement.checked) {
    xs.push(getUpperCase());
  }

  if (lowercaseElement.checked) {
    xs.push(getLowerCase());
  }

  if (numbersElement.checked) {
    xs.push(getNumbers());
  }

  if (symbolElement.checked) {
    xs.push(getSymbol());
  }

  return xs[Math.floor(Math.random() * xs.length)];
}


copyElement.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passareaElement.innerText;
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
});
// dark mode check box
var themeCheckbok = document.querySelector("input[name=theme]");
themeCheckbok.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  });
};
