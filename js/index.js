"use strict";

window.addEventListener('load', fadeInIntro);
window.addEventListener('scroll', changeNavColor);
window.addEventListener('load', function () {
  var _document$getElementB;
  (_document$getElementB = document.getElementById('resume-button-wrap')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('mousemove', buttonRun);
});
var buttonTranslateX = 0;
var buttonTranslateY = 0;
function fadeInIntro() {
  var titleEl = document.getElementById('site-title');
  var taglineEl = document.getElementById('site-tagline');
  var linksEl = document.getElementById('site-links');
  var elsToShowInOrder = [titleEl, taglineEl, linksEl];
  var _loop = function _loop() {
    var el = elsToShowInOrder[i];
    if (!el) return 1; // continue
    var timeout = i * 500;
    setTimeout(function () {
      el.classList.toggle('shown');
    }, timeout);
  };
  for (var i = 0; i < elsToShowInOrder.length; i++) {
    if (_loop()) continue;
  }
}
function changeNavColor() {
  var splashEl = document.querySelector('.splash');
  var menuEl = document.querySelector('nav#menu ul');
  if (!splashEl || !menuEl) return;
  if (splashEl.getBoundingClientRect().top < 0) {
    menuEl.classList.add('moved');
  } else {
    menuEl.classList.remove('moved');
  }
}
function buttonRun(e) {
  var el = e.currentTarget;
  var rect = el.getBoundingClientRect();
  var x = rect.x + rect.width * 0.5;
  var y = rect.y + rect.height * 0.5;
  var dirX = x - e.clientX;
  var dirY = y - e.clientY;
  var length = Math.sqrt(dirX * dirX + dirY * dirY);
  var dx = dirX / length * 2;
  var dy = dirY / length * 2;
  buttonTranslateX += dx;
  buttonTranslateY += dy;
  el.style.transform = "translate(".concat(buttonTranslateX, "px, ").concat(buttonTranslateY, "px)");
}