const menuBtn = document.querySelector(".menu__btn");
const navigationContainer = document.querySelector(".navigation");

const media = window.matchMedia("(min-width: 768px)");

menuBtn.addEventListener("click", function toggleActiveClass() {
  navigationContainer.classList.toggle("navigation--active");
});

media.addEventListener("change", function removeActiveClass(event) {
  if (event.matches) {
    navigationContainer.classList.remove("navigation--active");
  }
});

const resizeObserver = new ResizeObserver(function addResizingClass() {
  document.body.classList.add("resizing");

  requestAnimationFrame(function removeResizingClass() {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
