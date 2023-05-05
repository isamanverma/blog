function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  var pressTimer;

function startPressTimer() {
  pressTimer = window.setTimeout(function() {
    document.body.style.webkitUserSelect = 'text';
    document.body.style.mozUserSelect = 'text';
    document.body.style.msUserSelect = 'text';
    document.body.style.userSelect = 'text';
  }, 1000);
}

function cancelPressTimer() {
  window.clearTimeout(pressTimer);
}

var elements = document.querySelectorAll('.selectable');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mousedown', startPressTimer);
  elements[i].addEventListener('touchstart', startPressTimer);
  elements[i].addEventListener('mouseup', cancelPressTimer);
  elements[i].addEventListener('touchend', cancelPressTimer);
}
