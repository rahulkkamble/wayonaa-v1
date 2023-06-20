var feedbackCards = document.querySelectorAll(".customer-feedback-cards .card");
console.log(feedbackCards);

if (feedbackCards) {
  feedbackCards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      card.classList.add("hovered");
      setTimeout(function(){
        feedbackCards[0].classList.add("hovered");
    },3000);
    });

    card.addEventListener("mouseout", function () {
      card.classList.remove("hovered");
    });
  });
  
  // feedbackCards.forEach(function (card) {
    
  // });
  
}

// ** REVEAL ANIMATIONS FOR 
document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('#hero-bg-1', { delay: 1000, duration: 1000, opacity: 0, distance: "10%", origin: "left" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#banner-bg-1, #banner-bg-2, #model-g-home .banner-content', { delay: 900, duration: 1600, opacity: 0, distance: "10%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#hero-bg-2, #bike-bg-2, #banner-bg-3, .img-wrapper-about-page', { delay: 1200, duration: 1000, opacity: 0, distance: "5%", origin: "right" });   /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#about, #home .banner-content', { delay: 800, duration: 1000, opacity: 0, distance: "40%", origin: "bottom" });   /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.img-wrapper, .text-block, .btn-wrapper, .heading-wrapper, .icon-with-heading, #g-one-model-g, #g-lite-model-g', {
    delay: 300, duration: 1000, opacity: 0, distance: "60%", origin: "bottom",
  });

  ScrollReveal().reveal('.intro-cards .intro-card-1, .award-logo-1', { delay: 100, duration: 1000, opacity: 0, distance: "30%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.intro-cards .intro-card-2, .award-logo-2', { delay: 300, duration: 1500, opacity: 0, distance: "40%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.intro-cards .intro-card-3, .award-logo-3', { delay: 500, duration: 2000, opacity: 0, distance: "50%", origin: "bottom" });    /* easing: 'ease-in-out', */
  // ScrollReveal().reveal('#about .text-block',{delay: 300, duration: 1000, opacity: 0, distance: "50%", origin: "bottom", reset: true});
  ScrollReveal().reveal('#astino-banner .large-heading, #astino-banner p, #feature .heading-wrapper, #variation .heading-wrapper, #usp .large-heading, #dealer .heading-wrapper, .large-heading, #model-g .animation-p',
    { delay: 200, duration: 1000, opacity: 0, distance: "40%", origin: "bottom" });    /* easing: 'ease-in-out', */

  ScrollReveal().reveal('.persons-info, .breadcrumb, .card-map-section .card, .mapouter, .btn', {
    delay: 200, duration: 1000, opacity: 0, distance: "40%", origin: "bottom", useDelay: 'always'
  });

  // scale to 0
  ScrollReveal().reveal('.banner-dealer', {
    delay: 500, duration: 500, opacity: 0.3, scale: 0.85
  })
}, true);

