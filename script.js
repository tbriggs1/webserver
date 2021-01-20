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
