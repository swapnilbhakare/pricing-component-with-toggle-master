const toggle = document.getElementById("toggle");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

function toggleActive() {
  if (toggle.checked) {
    annually.forEach((price) => price.classList.remove("hidden"));
    monthly.forEach((price) => price.classList.add("hidden"));
  } else {
    annually.forEach((price) => price.classList.add("hidden"));
    monthly.forEach((price) => price.classList.remove("hidden"));
  }
}
toggle.addEventListener("click", toggleActive);
