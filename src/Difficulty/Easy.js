
class Easy extends Phaser.Scene {
    constructor() {
      super("Easy");
    }
  
    create() {
      const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Mode Menu', {
        font: "20px Arial",
        fill: 'black'
        })
        .setInteractive()
        .on('pointerdown', () => this.updateScene());
    }
  
    updateScene() {
      this.scene.start("levelSetting");
    }
    

  }
