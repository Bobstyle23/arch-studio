const menuBtn = document.querySelector(".menu__btn");
const navigationContainer = document.querySelector(".navigation");
const navigationListItems = document.querySelectorAll(".navigation__item");
const decorPageText = document.querySelector(".decor__header--page");
const media = window.matchMedia("(min-width: 37.5em)");
const overlay = document.querySelector(".overlay");

[...navigationListItems].forEach((item) => {
  item.addEventListener("click", () => {
    const tab = {
      id: item.dataset.tab,
      name: item.dataset.tabName,
    };

    sessionStorage.setItem("activeTab", JSON.stringify(tab));
  });
});

const savedTab = JSON.parse(sessionStorage.getItem("activeTab"));
const isHomeTab =
  window.location.pathname == "/" ||
  window.location.pathname.endsWith("/index.html");

if (savedTab) {
  const { id, name } = savedTab;
  const activeTab = document.querySelector(
    `.navigation__item[data-tab="${id}"]`,
  );

  if (activeTab && !isHomeTab) {
    activeTab.classList.add("navigation__item--active");
    decorPageText.textContent = name?.toUpperCase();
  }
}

overlay.addEventListener("click", removeActiveNavigation);

window.addEventListener("scroll", removeActiveNavigation);

menuBtn.addEventListener("click", function toggleActiveClass() {
  navigationContainer.classList.toggle("navigation--active");
  overlay.classList.toggle("overlay__hidden");
});

media.addEventListener("change", function removeActiveClass(event) {
  if (event.matches) {
    navigationContainer.classList.remove("navigation--active");
    overlay.classList.add("overlay__hidden");
  }
});

function toggleOverlayAndNavigation() {
  navigationContainer.classList.remove("navigation--active");
  overlay.classList.add("overlay__hidden");
}

function removeActiveNavigation() {
  if (navigationContainer.classList.contains("navigation--active")) {
    toggleOverlayAndNavigation();
  }
}
