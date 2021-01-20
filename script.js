var torrentPopup = document.getElementById('myPopup');


function displayPopUp(){
    torrentPopup.style.visibility = "visible";
}

torrentPopup.addEventListener('click', displayPopUp);
