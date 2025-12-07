const menuBtn = document.querySelector(".menu__btn");
const navigationContainer = document.querySelector(".navigation");
const navigationListItems = document.querySelectorAll(".navigation__item");
const decorPageText = document.querySelector(".decor__header--page");
const media = window.matchMedia("(min-width: 37.5em)");

[...navigationListItems].forEach((item) => {
  item.addEventListener("click", (event) => {
    const tab = {
      id: item.dataset.tab,
      name: event.target.innerHTML,
    };

    sessionStorage.setItem("activeTab", JSON.stringify(tab));
  });
});

const savedTab = JSON.parse(sessionStorage.getItem("activeTab"));
const isHomeTab =
  window.location.pathname == "/" ||
  window.location.pathname.endsWith("/index.html");

const activePage = window.location.pathname
  .split("/")
  .filter(Boolean)[0]
  ?.split(".")
  .shift();

// console.log(
//   window.location.pathname.split("/").filter(Boolean)[0].split(".").shift(),
// );
if (savedTab) {
  const { id, name } = savedTab;
  const activeTab = document.querySelector(
    `.navigation__item[data-tab="${id}"]`,
  );

  console.log(activeTab, activePage, name);

  if (activeTab && !isHomeTab) {
    activeTab.classList.add("navigation__item--active");
    decorPageText.textContent = name.toUpperCase();
  }
}

menuBtn.addEventListener("click", function toggleActiveClass() {
  navigationContainer.classList.toggle("navigation--active");
});

media.addEventListener("change", function removeActiveClass(event) {
  if (event.matches) {
    navigationContainer.classList.remove("navigation--active");
  }
});
