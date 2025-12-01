const heroContainer = document.querySelector(".hero");
const heroPageButtons = document.querySelectorAll(".hero__button");
const heroImage = document.querySelector(".hero__image");
const heroTitle = document.querySelector(".hero__title");
const heroDesc = document.querySelector(".hero__description");

const heroData = [
  {
    image: {
      desktop: "./img/home/desktop/image-hero-paramour.webp",
      tablet: "./img/home/tablet/image-hero-paramour.webp",
      mobile: "./img/home/mobile/image-hero-paramour.webp",
    },
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: {
      desktop: "./img/home/desktop/image-hero-seraph.webp",
      tablet: "./img/home/tablet/image-hero-seraph.webp",
      mobile: "./img/home/mobile/image-hero-seraph.webp",
    },
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    image: {
      desktop: "./img/home/desktop/image-hero-federal.webp",
      tablet: "./img/home/tablet/image-hero-federal.webp",
      mobile: "./img/home/mobile/image-hero-federal.webp",
    },
    title: "Federal II\nTower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    image: {
      desktop: "./img/home/desktop/image-hero-trinity.webp",
      tablet: "./img/home/tablet/image-hero-trinity.webp",
      mobile: "./img/home/mobile/image-hero-trinity.webp",
    },
    title: "Trinity Bank\nTower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];

[...heroPageButtons].forEach(function getButton(button, idx) {
  button.addEventListener("click", function controlButton() {
    document
      .querySelector(".hero__button--active")
      ?.classList.remove("hero__button--active");

    this.classList.add("hero__button--active");
    loadHero(idx);
  });
});

[...heroPageButtons][0].classList.add("hero__button--active");

loadHero();

function loadHeroImage(idx) {
  const oldImage = heroContainer.querySelector("picture");
  //PERF: REMOVES PREVIOUSLY ADDED IMAGE BEFORE ADDING A NEW ONE
  if (oldImage) {
    oldImage.remove();
  }
  return `<picture class="hero__image">
        <source
          srcset=${heroData[idx].image.desktop}
          media="(min-width: 64em)"
          type="image/webp"
        />
        <source
          srcset=${heroData[idx].image.tablet}
          media="(min-width: 48em)"
          type="image/webp"
        />
        <img src=${heroData[idx].image.mobile} alt="" />
      </picture>`;
}

function loadHeroContents(idx = 0) {
  const title = heroData[idx].title.replace(/\n/g, "<br>");
  const description = heroData[idx].description;

  return { title, description };
}

function loadHero(idx = 0) {
  const image = loadHeroImage(idx);
  const { title, description } = loadHeroContents(idx);
  heroContainer.insertAdjacentHTML("beforeend", image);
  heroTitle.innerHTML = title;
  heroDesc.innerHTML = description;
}
