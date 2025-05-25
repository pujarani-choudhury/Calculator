const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        if (display.value === "") return;
        display.value = eval(display.value);
      } catch (error) {
        alert("Invalid Expression");
        display.value = "";
      }
    } else {
      display.value += value;
    }
  });
});
