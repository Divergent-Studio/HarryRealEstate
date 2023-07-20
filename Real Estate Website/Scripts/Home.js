const fullscreenButton = document.getElementById("fullscreen-button");
const fullscreenText = document.getElementById("fullscreen-text");

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (document.fullscreenElement) {
    exitFullscreen();
  } else {
    requestFullscreen();
  }
}

function requestFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

document.addEventListener("fullscreenchange", handleFullscreenChange);

function handleFullscreenChange() {
  if (document.fullscreenElement) {
    fullscreenText.textContent = "Press to exit";
  } else {
    fullscreenText.textContent = "Press for a better experience";
  }
}
