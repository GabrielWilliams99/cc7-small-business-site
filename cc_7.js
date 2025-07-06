const input = document.getElementById("headline-input");
const button = document.getElementById("update-btn");
const ctaHeadline = document.getElementById("cta-headline");

button.addEventListener("click", () => {
  const newHeadline = input.value.trim();
  if (newHeadline !== "") {
    ctaHeadline.textContent = newHeadline;
    input.value = "";
  }
});
