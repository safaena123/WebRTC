navigator.getUserMedia = navigator.getUserMedia
 || navigator.webkitGetUserMedia
 || navigator.mozGetUserMedia;
var constraints = {
    audio: true,
    video: {
        width: {
            min: 320,
            max: 1280
        },
        height: {
            min: 240,
            max: 720
        }
    }
};
var video = document.querySelector("video");
function successCallback(stream) {
window.stream = stream;
if (window.URL) {
 video.src = window.URL.createObjectURL(stream);
} else {
 video.src = stream;
}
video.play();
}
function errorCallback(error){
console.log("navigator.getUserMedia error: ", error);
}
navigator.getUserMedia(constraints, successCallback, errorCallback);
