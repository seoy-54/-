function zoomIn(event) {
  event.target.style.transform = "scale(1.3)";
  event.target.style.zIndex = 1;
  event.target.style.transform = "all 0.3s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transform = "all 0.3s";
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("h3");
  if (window.scrollY > 0) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
