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

  document.addEventListener("DOMContentLoaded", function(event) {

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
  });
