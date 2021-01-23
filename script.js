var torrentPopup = document.getElementById('myPopup');
var torrentButton = document.getElementById('torrentButton');
var torrentCloseButton = document.getElementById('torrentCloseButton');


//Popup Display
function displayPopUp(){
    torrentPopup.style.visibility = "visible";
}

torrentButton.addEventListener('click', displayPopUp);
torrentCloseButton.addEventListener('click', function(){
    torrentPopup.style.visibility = "hidden";
})

$(function(){
<<<<<<< HEAD

})
=======
    var $buttonClick = $('#plexButton').click(function(){
        $('.plexpopuptext').css('visibility', 'visible');
    })
    var $buttonClose = $('#plexCloseButton').click(function(){
        $('.plexpopuptext').css('visibility','hidden');
    })
})
>>>>>>> 48e33804a68fc0470742c28fe3d559d2c8bf7469
