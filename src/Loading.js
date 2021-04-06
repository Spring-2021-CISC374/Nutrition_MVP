class Loading extends Phaser.Scene {
    constructor() {
      super("Loading");
    }
  
    preload(){
      this.load.image("background", "asserts/background.png");
  
    }
  
    create() {

      this.scene.start("GameMenu");
    }
  }

