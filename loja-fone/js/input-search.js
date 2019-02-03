const $inputSearch = document.querySelector('.input-search');
const $open = document.querySelector(".input-search > .icon");
const $close = document.querySelector(".input-search .-close");


$open.addEventListener('click', event => {
   event.preventDefault();
   $inputSearch.classList.toggle("-active");

   $open.classList.remove("-active");
   $close.classList.add("-active");
});

$close.addEventListener('click', event => {
   event.preventDefault();
   $inputSearch.classList.toggle("-active");
   
   $close.classList.remove("-active");
   $open.classList.add("-active");
});