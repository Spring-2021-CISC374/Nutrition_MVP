var game;
var gameWidth = 512;
var gameHeight = 750;

var config = {
  type: Phaser.CANVAS,
  width: gameWidth,
  height: gameHeight,
  backgroundColor: 0xffffff,
  scene: [Loading, GameMenu, levelSetting, Easy, Normal, Hard, Expert],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
        debug: false
      }
    }
  }
  game = new Phaser.Game(config);


