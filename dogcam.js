var camPopUp = document.getElementById('dogStream');
var camButton = document.getElementById('meeButton');
var torrentCloseButton = document.getElementById('torrentCloseButton');


// //Popup Display
// function displayPopUp(){
//     camPopUp.style.visibility = "visible";
// }

// camButton.addEventListener('click', displayPopUp);
// torrentCloseButton.addEventListener('click', function(){
//     torrentPopup.style.visibility = "hidden";
// })

$(function(){
    var $buttonClick = $('#meeButton').click(function(){
        $('.mainCard').css('visibility', 'hidden');
        $('#dogStream').css('visibility', 'visible');
    })
    var $buttonClose = $('#closeCam').click(function(){
        $('#dogStream').css('visibility','hidden');
        $('.mainCard').css('visibility', 'visible');
    })
})
