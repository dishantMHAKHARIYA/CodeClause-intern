const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

document.getElementById("sign-in-btn").addEventListener("click", function() {
    window.open("homepage.html", "_blank");
  });