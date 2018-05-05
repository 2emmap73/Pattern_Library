var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n); // This code enables the user to move back and forth between images, i.e. Next and Previous.
}

function currentSlide(n) {
  showSlides(slideIndex = n);  // This is for thumbnail image controls.
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides"); // This code finds the class name 'slides' in the HTML code of the Carousel.html.
  var cdt = document.getElementsByClassName("cdt");  // This code finds the span class 'cdt' in the HTML code. It displays the images dots.
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < cdt.length; i++) {
      cdt[i].className = cdt[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  cdt[slideIndex-1].className += " active";
}