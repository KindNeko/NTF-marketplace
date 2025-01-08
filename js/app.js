const menuList = document.querySelector(".menu__list");
const menuOpen = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".menu__close");
function toggleMenu() {
  menuOpen.addEventListener("click", () => {
    menuList.classList.add("menu__open");
  });
  closeMenu.addEventListener("click", () => {
    menuList.classList.remove("menu__open");
  });
}

toggleMenu();