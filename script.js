document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const info = button.nextElementSibling;

      if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        button.textContent = "Ver menos";
      } else {
        info.classList.add("hidden");
        button.textContent = "Ver más";
      }
    });
  });
});
