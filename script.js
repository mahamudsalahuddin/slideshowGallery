let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".demo");
    let captionText = document.querySelectorAll("#caption");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    let slidesArr = Array.from(slides);
    let dotsArr = Array.from(dots);
    slidesArr.map((item)=>{
        item.style.display = "none";
    });
    dotsArr.map((item)=>{
        item.className = item.className.replace(" active", "");
    });
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].lastChild;
}