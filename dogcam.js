var camPopUp = document.getElementById('dogStream');
var camButton = document.getElementById('meeButton');
var torrentCloseButton = document.getElementById('torrentCloseButton');
var burgerMenu = document.getElementById('burgerIcon');
var burgerContent = document.getElementById('navItems');
var burgerIcons = document.getElementsByClassName('burgerButtons');
var date = new Date();
var time = date.getTime();
var loading = document.getElementById('loading');
var loadingText = document.getElementById('loadingText');


burgerMenu.addEventListener('click', function(){
    let getStyle = window.getComputedStyle(burgerContent);
    if(getStyle.display === 'none'){
        burgerContent.style.display = 'block';
        burgerIcons[0].classList.add('changeB1');
        burgerIcons[1].classList.add('changeB2');
        burgerIcons[2].classList.add('changeB3');
        $('.mainClass').css('margin-top', '10em');
    } else {
        burgerContent.style.display = 'none';
        burgerIcons[0].classList.remove('changeB1');
        burgerIcons[1].classList.remove('changeB2');
        burgerIcons[2].classList.remove('changeB3');
        $('.mainClass').css('margin-top', '1%');
    }
})


$(function(){
    var $buttonClick = $('#meeButton').click(function(){
        $(window).scrollTop(0);
        $('.mainCard').css('visibility', 'hidden');
        $('#loading').css('display', 'flex');
        $('.slideshow-container').css('visibility', 'hidden');
        setTimeout(() => {$('#loadingText').append(" . ");}, 1000);
        setTimeout(() => {$('#loadingText').append(" . ");}, 2000);
        setTimeout(() => {$('#loadingText').append(" . ");}, 3000);
        setTimeout(() => {$('#loadingText').text("Loading . . ")}, 4000);
        setTimeout(() => {$('#loadingText').text("Loading . ")}, 5000);
        setTimeout(() => {$('#loadingText').text("Loading ")}, 6000);
        setTimeout(() => {$('#loading').css('display', 'none');}, 6500);
        setTimeout(() => {$('#dogStream').css('visibility', 'visible');}, 6500);
    })
    var $buttonClose = $('#closeCam').click(function(){
        $('#dogStream').css('visibility','hidden');
        $('.mainCard').css('visibility', 'visible');
        $('.slideshow-container').css('visibility', 'visible');
        })
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}