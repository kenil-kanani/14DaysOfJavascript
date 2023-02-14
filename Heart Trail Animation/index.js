const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
  const x_p = event.offsetX;
  const y_p = event.offsetY;
  const spanE1 = document.createElement("span");
  spanE1.style.left = x_p + "px"
  spanE1.style.top = y_p + "px"
  const size = Math.random() * 100;
  spanE1.style.width = size + "px";
  spanE1.style.height = size + "px";
  bodyE1.appendChild(spanE1);
  setTimeout(() => {
    spanE1.remove();
  }, 3000)
});