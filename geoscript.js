if (Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success,fail);
    window.alert('You are at position ' + navigator.geolocation.getCurrentPosition(success,fail));

} else {
    window.alert("Sorry your browser does not support this features");
}
