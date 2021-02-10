var torrentPopup = document.getElementById('myPopup');
var torrentButton = document.getElementById('torrentButton');
var torrentCloseButton = document.getElementById('torrentCloseButton');
var burgerMenu = document.getElementById('burgerIcon');
var burgerContent = document.getElementById('navItems');
var burgerIcons = document.getElementsByClassName('burgerButtons');

//https://176.31.225.134/ui/#/login
//Popup Display
function displayPopUp(){
    torrentPopup.style.visibility = "visible";
}


burgerMenu.addEventListener('click', function(){
    let getStyle = window.getComputedStyle(burgerContent);
    if(getStyle.display === 'none'){
        burgerContent.style.display = 'block';
        burgerIcons[0].classList.add('changeB1');
        burgerIcons[1].classList.add('changeB2');
        burgerIcons[2].classList.add('changeB3');
        $('.introTitle').css('margin-top', '5em');
    } else {
        burgerContent.style.display = 'none';
        burgerIcons[0].classList.remove('changeB1');
        burgerIcons[1].classList.remove('changeB2');
        burgerIcons[2].classList.remove('changeB3');
        $('.introTitle').css('margin-top', '1%');
    }
})

torrentButton.addEventListener('click', displayPopUp);
torrentCloseButton.addEventListener('click', function(){
    torrentPopup.style.visibility = "hidden";
})


$(function(){
    var $buttonClick = $('#plexButton').click(function(){
        $('.plexpopuptext').css('visibility', 'visible');
    })
    var $buttonClose = $('#plexCloseButton').click(function(){
        $('.plexpopuptext').css('visibility','hidden');
    })
})





