const circle = document.querySelector(".circle");
const hoverTextElements = document.querySelectorAll(
  ".hover-text, .hover-text p"
);

document.addEventListener("mousemove", (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
});

hoverTextElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    circle.classList.add("hovered");
    element.style.color = "white";
  });

  element.addEventListener("mouseleave", () => {
    circle.classList.remove("hovered");
    element.style.color = "#333";
  });
});
