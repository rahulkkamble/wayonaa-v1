// Get the dropdown element and the tab pane container
var dropdown = document.getElementById("dropdown-models");
var tabPane = document.getElementById("tab-pane");

// Add an event listener to the dropdown change event
if(dropdown){
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
}