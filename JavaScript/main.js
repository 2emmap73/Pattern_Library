/* When the user hovers and/or clicks on the button, 
toggle between hiding and showing the dropdown list */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// As the user moves the mouse pointer away from the button or clicks outisde the button area, close the dropdown menu.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

