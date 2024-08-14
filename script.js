document.getElementById("numberInput").addEventListener("input", function () {
  const input = this.value;
  const feedback = document.getElementById("feedback");

  // Clear previous feedback
  feedback.textContent = "";

  // Check if the input is a valid number
  if (input === "" || isNaN(input)) {
    return;
  }

  const number = Number(input);

  if (number < 0) {
    feedback.textContent = "Enter a positive value";
  } else if (number % 2 === 0) {
    // Even number
    const nextEvenNumbers = [number + 2, number + 4, number + 6];
    feedback.textContent = nextEvenNumbers.join(", ");
  } else {
    // Odd number
    const nextOddNumbers = [number + 2, number + 4, number + 6];
    feedback.textContent = nextOddNumbers.join(", ");
  }
});
