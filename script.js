const chat = document.querySelector(".chat");
const container = document.querySelector(".container");
const chatBox = document.querySelector(".chat-box");
const loginButton = document.querySelector("#button");
const loginPage = document.querySelector(".login-page");
const cross = document.querySelector("#cross");
const modeButton = document.querySelector(".mode-button");
const mainPage = document.querySelector(".main");
const overviewSection = document.querySelector(".overview");
const submitBtn = document.querySelector(".submit");
const highlight = document.querySelector(".highlights");
const getStarted = document.querySelector(".get-started");
const heads = document.querySelectorAll(".headd");

loginButton.addEventListener("click", () => {
  if (!loginPage.classList.contains("active")) {
    loginPage.classList.add("active");
  }
});

cross.addEventListener("click", () => {
  loginPage.classList.remove("active");
});

modeButton.addEventListener("click", () => {
  if (container.classList.contains("dark-mode")) {
    container.classList.remove("dark-mode");
    chat.classList.remove("dark-mode");
    mainPage.classList.remove("dark-mode");
    overviewSection.classList.remove("dark-mode");
    highlight.classList.remove("dark-mode");
    getStarted.classList.remove("dark-mode");
    heads[0].classList.remove("dark-mode");
    heads[1].classList.remove("dark-mode");
    heads[2].classList.remove("dark-mode");
  } else {
    container.classList.add("dark-mode");
    chat.classList.add("dark-mode");
    mainPage.classList.add("dark-mode");
    overviewSection.classList.add("dark-mode");
    highlight.classList.add("dark-mode");
    getStarted.classList.add("dark-mode");
    heads[0].classList.add("dark-mode");
    heads[1].classList.add("dark-mode");
    heads[2].classList.add("dark-mode");
  }
});

chat.addEventListener("click", () => {
  if (chatBox.classList.contains("active")) {
    chatBox.classList.remove("active");
  } else {
    chatBox.classList.add("active");
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  loginPage.classList.remove("active");
});
