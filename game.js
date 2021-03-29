
var config = {
    width: 512,
    height: 544,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default:"arcade",
        arcade:{
            debug: false
        }
    }
}

var gameSettings = {
    playerSpeed: 200,
}
var game = new Phaser.Game(config);
