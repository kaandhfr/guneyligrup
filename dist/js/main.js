document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
});

const mobileMenu = () => {
  let navigation = document.querySelector("#navigation-menu"),
    mobileMenuList = document.querySelector("#mobile-menu-list");
  if (navigation.querySelectorAll("ul li").length > 0) {
    navigation.querySelectorAll("ul li").forEach(element => {
        mobileMenuList.insertAdjacentHTML("beforeend", element.outerHTML);
    });
  }
};

const mobileMenuOpen = (event) => {
    console.log(event);
    document.querySelector("#mobile-menu").classList.add("opened");
    document.querySelector(".mobile-menu-shadow").classList.remove("opacity-0", "invisible");
}

const mobileMenuClose = (e) => {
    document.querySelector("#mobile-menu").classList.remove("opened");
    document.querySelector(".mobile-menu-shadow").classList.add("opacity-0", "invisible");
}

const scrollFunc = (e) => {
  let offset = document.querySelector(e.dataset.href).offsetTop,
    offsetDiff = e.dataset.offsety > 0 ? e.dataset.offsety : 0;
  window.scrollTo(0, offset - offsetDiff);
};
