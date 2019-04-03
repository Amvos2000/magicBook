var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    //pauze the video
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        //play the video
        video.pause();
        btn.innerHTML = "Play";
    }
}
document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
    // Go to the Delete page
    window.location.replace("http://localhost/magicBook/php/Delete.php");
}

