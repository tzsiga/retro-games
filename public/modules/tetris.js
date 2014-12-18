var $         = require('../js/vendor/jquery.js'),
    GameTable = require('./gametable'),
    Block     = require('./block'),
    Settings  = require('./settings');

require('../js/vendor/jquery.timer.js');

function Tetris() {
  var gt = new GameTable(Settings.AREA_HEIGHT, Settings.AREA_WIDTH);

  var timer = $.timer(function () {
    if (gt.isBlockFalling()) {
      gt.moveBlockDown();
    } else {
      gt.clearFullRows();
      gt.addBlock(new Block());
    }

    gt.redraw();
  });

  timer.set({
    time: Settings.TIMESTAP,
    autostart: true
  });

  gt.redraw();

  $("body").keydown(function (e) {
    switch (e.keyCode) {
      case Settings.KEYCODE_LEFT:
        e.preventDefault();
        gt.moveBlockLeft();
        break;
      case Settings.KEYCODE_RIGHT:
        e.preventDefault();
        gt.moveBlockRight();
        break;
      case Settings.KEYCODE_UP:
        e.preventDefault();
        gt.rotateBlockLeft();
        break;
      case Settings.KEYCODE_DOWN:
        e.preventDefault();
        gt.rotateBlockRight();
        break;
      case Settings.KEYCODE_SPACE:
        e.preventDefault();
        gt.moveBlockDown();
        break;
    }

    gt.redraw();
  });
}

module.exports = Tetris;