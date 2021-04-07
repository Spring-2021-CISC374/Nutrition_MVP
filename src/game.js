var game;
var gameWidth = 935;
var gameHeight = 600;

var config = {
  type: Phaser.CANVAS,
  width: gameWidth,
  height: gameHeight,
  backgroundColor: 0xffffff,
  scene: [Loading, GameMenu, Aboutus, level, Easy, Normal, Hard, Expert],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
        debug: false
      }
    }
  }
  game = new Phaser.Game(config);


