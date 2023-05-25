// Get the dropdown element and the tab pane container
var dropdown = document.getElementById("dropdown-models");
// var tabPane = document.getElementById("tab-pane");

// Add an event listener to the dropdown change event
dropdown.addEventListener("change", function() {
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

ScrollReveal().reveal('#hero-bg-1',{delay: 5, duration: 1000, opacity: 0, distance: "50%", origin: "left"});
ScrollReveal().reveal('#hero-bg-2',{delay: 5, duration: 1000, opacity: 0, distance: "50%", origin: "right"});
ScrollReveal().reveal('#about, #home .banner-content',{delay: 100, duration: 1000, opacity: 0, distance: "50%", origin: "bottom"});
ScrollReveal().reveal('#about .img-wrapper, #about .text-block, #about .btn-wrapper, #model-g .heading-wrapper',{
    delay: 300, duration: 1000, opacity: 0, distance: "70%", origin: "bottom",
});
// ScrollReveal().reveal('#about .text-block',{delay: 300, duration: 1000, opacity: 0, distance: "50%", origin: "bottom", reset: true});