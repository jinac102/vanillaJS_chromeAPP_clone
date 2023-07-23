const logForm = document.querySelector("#login_form");
const logInput = logForm.querySelector("input");
const logBtn = logForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const hidden_CL = "hidden";

function ClickBtn(e) {
  e.preventDefault();
  logForm.classList.add(hidden_CL);
  const userName = logInput.value;
  greeting.innerText = `Hello ${userName}`;
  logForm.classList.remove(hidden_CL);
  //consolie.dir()은 ()사이에 든 태그가 가진 정보를 전부 보여준다.
}

logBtn.addEventListener("click", ClickBtn);
