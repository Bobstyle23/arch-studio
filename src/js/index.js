const menuBtn = document.querySelector(".menu__btn");
const navigationContainer = document.querySelector(".navigation");
const navigationListItems = document.querySelectorAll(".navigation__item");
const media = window.matchMedia("(min-width: 768px)");

[...navigationListItems].forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelector(".navigation__item--active")
      ?.classList.remove("navigation__item--active");
    item.classList.add("navigation__item--active");
  });
});

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
