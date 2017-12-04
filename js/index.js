/** * Returns a random integer between min (inclusive) and max
 * (inclusive) * Using Math.round() will give you a non-uniform
 * distribution!  */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

function getVideoSrc(idx) {
  return 'video/bg-vid-' + idx + '.mp4';
}

function setVideo() {

  var maxIndex = 360;
  var startIndex = 197;
  var video = document.getElementById('bgvid');
  var source = document.createElement('source');

  source.setAttribute('src', getVideoSrc(startIndex));

  video.appendChild(source);
  video.play();

  setInterval(function() {
    video.pause();
    var vidId = getRandomInt(0, 360);
    source.setAttribute('src', getVideoSrc(vidId.pad(3)));

    video.load();
    video.play();
  }, 8000);
}

function showMusicPane() {
  document.getElementById('music-link').classList.add('active');
  document.getElementById('music-container').classList.remove('hide');
}

function hideMusicPane() {
  document.getElementById('music-link').classList.remove('active');
  document.getElementById('music-container').classList.add('hide');
}

function showMainPane() {
  document.getElementById('mammals-img-container').classList.remove('hide');
}

function hideMainPane() {
  document.getElementById('mammals-img-container').classList.add('hide');
}

function toggleMusicPane() {
  if (location.hash === '#music') {
    hideMainPane();
    showMusicPane();
  } else {
    hideMusicPane();
    showMainPane();
  }
};

(function() {
  toggleMusicPane();
  window.onhashchange = toggleMusicPane;
  document.addEventListener('DOMContentLoaded', setVideo)
})();
