const modalLogin = document.getElementById("modal");
const modalRecovery = document.getElementById("modal-recovery");
const closeButton = document.getElementById("close-modal");
const closeButton2 = document.getElementById("close-modal2");
const loginButton = document.getElementById("login-modal");
const recoveryButton = document.getElementById("recovery-button");

function showModal() {  
  // modal.classList.replace("modal", "show-modal");
  modalLogin.style.display = "block";
}

function hideModalLogin() {  
  // modal.classList.replace("show-modal", "modal");
  modalLogin.style.display = "none";
}
function hideModalRecovery() {  
  // modal.classList.replace("show-modal", "modal");
  modalRecovery.style.display = "none";
}

function hideAndShowModal() {
  modalLogin.style.display = "none";
  modalRecovery.style.display = "Block";
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    hideModal();
  }
}

loginButton.addEventListener("click", showModal);
recoveryButton.addEventListener("click", hideAndShowModal);
closeButton.addEventListener("click", hideModalLogin);
closeButton2.addEventListener("click", hideModalRecovery);
document.addEventListener("keydown", handleKeyDown);