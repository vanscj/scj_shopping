// slide
let slideIndex = 1;
showSlides(slideIndex);
console.log("OK");

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("scj-slide-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].classList.add('show');
      dots[slideIndex-1].className += " active show";
    }