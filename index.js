window.onload=function(){

  //////menu button functionality
  const menuBtn = document.getElementById('menu-btn');

  menuBtn.addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('nav--visible');
    }, false);
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__btn--changed');
  });


  ///////Show more images button functionality
  const showMoreBtn = document.querySelector(".images-gallery__button");
  const imagesToShow = document.querySelectorAll(".image--hidden");

  showMoreBtn.addEventListener('click', () => {
    for (let i=0; i<imagesToShow.length; i+=1){
      imagesToShow[i].style.display = 'flex';
      showMoreBtn.disabled = true;
    }
  });
}

/////Open answer button functionality
const btns = Array.from(document.querySelectorAll(".plus-minus-toggle"));
const answers = Array.from(document.querySelectorAll(".answer"));

  answers.forEach((answer, i) => {
    btns.forEach((button, index) => {
      button.addEventListener('click', () => {
        if(i === index){
        answer.classList.toggle("answer--open");
        button.classList.toggle('collapsed');
        }
      })
    });
  });



//////Slider functionality

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}