// Get the dropdown element and the tab pane container
var dropdown = document.getElementById("dropdown-models");
var tabPane = document.getElementById("tab-pane");

// Add an event listener to the dropdown change event
dropdown.addEventListener("change", function () {
  // Get the selected value from the dropdown
  var value = dropdown.value;
  console.log(value);

  // Hide all the tab panes
  var tabPanes = document.getElementsByClassName("tab-pane-model");
  for (var i = 0; i < tabPanes.length; i++) {
    tabPanes[i].style.display = "none";
  }

  // Show the tab pane that matches the selected value
  var selectedTabPane = document.getElementById(value);
  if (selectedTabPane) {
    selectedTabPane.style.display = "block";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('#hero-bg-1', { delay: 1000, duration: 1000, opacity: 0, distance: "10%", origin: "left" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#hero-bg-2', { delay: 1200, duration: 1000, opacity: 0, distance: "10%", origin: "right" });   /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#about, #home .banner-content', { delay: 1000, duration: 1000, opacity: 0, distance: "40%", origin: "bottom" });   /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#about .img-wrapper, #about .text-block, #about .btn-wrapper, #model-g .heading-wrapper', {
    delay: 300, duration: 1000, opacity: 0, distance: "60%", origin: "bottom",
  });
  ScrollReveal().reveal('#model-g .animation-p', { delay: 100, duration: 1000, opacity: 0, distance: "40%", origin: "bottom" });   /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.intro-cards .intro-card-1, .award-logo-1', { delay: 100, duration: 1000, opacity: 0, distance: "30%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.intro-cards .intro-card-2, .award-logo-2', { delay: 300, duration: 1500, opacity: 0, distance: "40%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('.intro-cards .intro-card-3, .award-logo-3', { delay: 500, duration: 2000, opacity: 0, distance: "50%", origin: "bottom" });    /* easing: 'ease-in-out', */
  ScrollReveal().reveal('#astino-banner .large-heading, #astino-banner p, #feature .heading-wrapper, #variation .heading-wrapper, #usp .large-heading, #dealer .heading-wrapper', { delay: 200, duration: 1000, opacity: 0, distance: "40%", origin: "bottom" });    /* easing: 'ease-in-out', */
  // ScrollReveal().reveal('#about .text-block',{delay: 300, duration: 1000, opacity: 0, distance: "50%", origin: "bottom", reset: true});

  var hrefModelG = document.getElementById('model-g-path');
  var hrefGOne = document.getElementById('model-g-one-path');
  var hrefGLite = document.getElementById('model-g-lite-path');
  hrefModelG.setAttribute('href','assets/route/model-G.html');
  hrefGOne.setAttribute('href','assets/route/g-one.html');
  hrefGLite.setAttribute('href','assets/route/model-G.html');
}, false);

