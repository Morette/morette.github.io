const $menu = document.querySelector(".item.-menu");
const $menuList = document.querySelector("#menu");

$menu.addEventListener('click', () => {
   $menuList.classList.toggle('-active');
});