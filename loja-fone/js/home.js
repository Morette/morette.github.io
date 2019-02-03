const $second = document.querySelector(".button-store.-second");

$second.addEventListener('click', handleClick);


let valorInicial = 10;
function handleClick () {
   const $carrinho = document.querySelector(".item.-last");
   
   $carrinho.innerHTML = `Carrinho (${++valorInicial})`;
}