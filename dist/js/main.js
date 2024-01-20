document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
  isShow();
  document.addEventListener("scroll", isShow);
  Fancybox.bind();
  accordion(".faq-accordion");
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

const isShow = () => {
  const places = document.querySelectorAll("[data-is-show]");
  if(places.length > 0)
    places.forEach(element => {
      let placeDiff = element.dataset.showingoffset ? parseInt(element.dataset.showingoffset) : 0;
      if (window.innerHeight > (element.getBoundingClientRect().top + placeDiff)) {
        element.classList.add(element.dataset.addclass);
      }
    });
}

const accordion = (el) => {
  document.querySelector(el).querySelectorAll(".accordion-item").forEach(element => {
    let defHeight = element.querySelector(".accordion-content").style.height;
    element.querySelector(".accordion-button").addEventListener("click", (event) => {
      document.querySelector(el).querySelectorAll(".accordion-item").forEach((button) => {
        button.classList.remove("active");
      });
      event.target.offsetParent.classList.add("active");
    })
  });
}