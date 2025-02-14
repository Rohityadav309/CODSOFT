document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");
  const themeToggle = document.querySelector(".theme-toggle i");
  let expression = "";

  // Handle button clicks
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const value = button.textContent.trim();

          if (button.classList.contains("clear")) {
              expression = "";
          } else if (button.classList.contains("delete")) {
              expression = expression.slice(0, -1);
          } else if (button.classList.contains("equal")) {
              try {
                  expression = eval(expression).toString();
              } catch {
                  expression = "Error";
              }
          } else {
              expression += value;
          }

          result.value = expression;
      });
  });

  // Handle keyboard input
  document.addEventListener("keydown", (e) => {
      if (/[0-9+\-*/.=]/.test(e.key)) {
          if (e.key === "=" || e.key === "Enter") {
              try {
                  expression = eval(expression).toString();
              } catch {
                  expression = "Error";
              }
          } else {
              expression += e.key;
          }
      } else if (e.key === "Backspace") {
          expression = expression.slice(0, -1);
      } else if (e.key === "Escape") {
          expression = "";
      }
      
      result.value = expression;
  });

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      themeToggle.classList.toggle("fa-sun");
      themeToggle.classList.toggle("fa-moon");

      if (document.body.classList.contains("light-theme")) {
          document.body.style.background = "linear-gradient(135deg, #ffffff, #d1d8e0)";
      } else {
          document.body.style.background = "linear-gradient(135deg, #0f172a, #1e293b)";
      }
  });
});
