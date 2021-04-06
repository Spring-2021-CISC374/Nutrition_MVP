
class Easy extends Phaser.Scene {
    constructor() {
      super("Easy");
    }
  
    create() {
      const backButton = this.add.text(config.width - 240, config.height - 40, 'ChangeDifficulty!', {
        font: "30px Arial",
        fill: '#0f0'
        })
        .setInteractive()
        .on('pointerdown', () => this.updateScene());
    }
  
    updateScene() {
      this.scene.start("levelSetting");
    }
    

  }
