(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');

  var cards = [
    'seven.png',
    'bell.png',
    'cherry.png'
  ];

  var timers = [];

  function runSlot(n) {
    timers[n] = setTimeout(function() {
      panels[n].children[0].src =
      'img/' +
      cards[Math.floor(Math.random() * cards.length)];
      runSlot(n);
    }, 50);
  }

  function initPanel() {
    var i;
    for (i = 0; i < panels.length; i++) {
      panels[i].children[1].addEventListener('click', function() {
        clearTimeout(timers[this.dataset.index]);
      });
    }
  }

  initPanel();

  spin.addEventListener('click', function() {
    var i;
    for (i = 0; i < panels.length; i++) {
      runSlot(i);
    }
  });

})();
