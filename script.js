document.getElementById("year").textContent = new Date().getFullYear();

const form = document.querySelector(".reservation-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const previousText = button.textContent;
    button.textContent = "Request Sent";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = previousText;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
}
