import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const content = document.querySelector("#content");
const pageButtons = document.querySelectorAll("[data-page]");

const pages = {
  home: homePage,
  menu: menuPage,
  about: aboutPage,
};

function renderPage(pageName) {
  const render = pages[pageName] ?? pages.home;
  content.innerHTML = render();

  pageButtons.forEach((button) => {
    const isCurrentPage = button.dataset.page === pageName;
    button.classList.toggle("is-active", isCurrentPage);
    if (isCurrentPage) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    renderPage(pageButton.dataset.page);
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    const selectedCategory = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const isSelected = button === filterButton;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });

    document.querySelectorAll("[data-category]").forEach((item) => {
      item.hidden =
        selectedCategory !== "all" &&
        item.dataset.category !== selectedCategory;
    });
  }
});

renderPage("home");
