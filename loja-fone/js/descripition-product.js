const $heart = document.querySelector('.-heart');
const $stars = document.querySelectorAll(".star");
const $positionLast = $stars.length - 1;

// alternar status do coração

$heart.addEventListener('click', handleClick);

function handleClick() {
   this.classList.toggle('-active');
}

// alternar status das estrelas

$stars.forEach(function ($star, index) {
   if (index == 0) {
      $star.addEventListener('click', firstStar);
   }

   if(index == $positionLast) {
      $star.addEventListener('click', lastStars);
   }

   if (index > 0 && index < $positionLast) {
      $star.addEventListener('click', function () {
         middleStars(index);
      })
   }
})

function firstStar () {
   $stars.forEach(($star) => {
      $star.classList.remove("-active");
   })

   this.classList.add("-active");
}

function middleStars (starSelected) {
   $stars.forEach(($star, starArray) => {
      $star.classList.remove('-active');
   
      if (starArray <= starSelected) {
         $star.classList.add("-active");
      }
   
   });
}

function lastStars () {
   $stars.forEach(($star) => {
      $star.classList.add("-active");
   });
}