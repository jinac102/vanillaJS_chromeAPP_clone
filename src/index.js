const logForm = document.querySelector("#login_form");
const logInput = logForm.querySelector("input");
const logBtn = logForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const hidden_class = "hidden";
const username_Key = "username";

function ClickBtn(e) {
  e.preventDefault();
  logForm.classList.add(hidden_class);
  const userName = logInput.value;

  localStorage.setItem(username_Key, userName);
  greetingH1(userName);
}

//로컬스토리지에 저장되어있는지 확인하기
const saveUsername = localStorage.getItem(username_Key);
function greetingH1(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(hidden_class);
}

if (saveUsername === null) {
  logForm.classList.remove(hidden_class);
  logForm.addEventListener("submit", ClickBtn);
} else {
  greetingH1(saveUsername);
}
