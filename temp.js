document.addEventListener("DOMContentLoaded", () => {
  const cel = document.getElementById("cel");
  const fah = document.getElementById("fah");

  // Check if elements exist
  if (!cel || !fah) {
    console.error("Input elements with IDs 'cel' or 'fah' not found.");
    return;
  }

  cel.addEventListener("input", function () {
    const c = parseFloat(this.value);
    if (!isNaN(c)) {
      let f = (c * 9) / 5 + 32;
      if (!Number.isInteger(f)) {
        f = f.toFixed(2); // Reduced to 2 decimal places for readability
      }
      fah.value = f;
    } else {
      fah.value = ""; // Clear output if input is invalid
    }
  });

  fah.addEventListener("input", function () {
    const f = parseFloat(this.value);
    if (!isNaN(f)) {
      let c = ((f - 32) * 5) / 9;
      if (!Number.isInteger(c)) {
        c = c.toFixed(2); // Reduced to 2 decimal places for readability
      }
      cel.value = c;
    } else {
      cel.value = ""; // Clear output if input is invalid
    }
  });
});