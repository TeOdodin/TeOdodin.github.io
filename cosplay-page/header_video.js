// List of video URLs
const videos = [
  "assets/videos/40568047157-offset-1052.mp4",
  "assets/videos/46793471020-offset-8040.mp4",
  "assets/videos/vod-1795221061-offset-10186.mp4",
  "assets/videos/vod-1795221061-offset-10362.mp4",
  "assets/videos/vod-1795221061-offset-7336.mp4",
  "assets/videos/vod-1795221061-offset-8238.mp4",
];

let currentIndex = 0;
const videoPlayer = document.getElementById("header-player");
videoPlayer.volume = 0.2;

// Function to load and play the next video
function playNextVideo() {
  currentIndex = (currentIndex + 1) % videos.length; // Loop back to first video
  videoPlayer.src = videos[currentIndex];
  videoPlayer.play();
}

// Set the first video
videoPlayer.src = videos[currentIndex];
let videoPlayerStarted = false;

// Play next video when current one ends
videoPlayer.addEventListener("ended", playNextVideo);


function startPlaying() {
  if(videoPlayerStarted) return;
  videoPlayerStarted = true;
  videoPlayer.play();
}