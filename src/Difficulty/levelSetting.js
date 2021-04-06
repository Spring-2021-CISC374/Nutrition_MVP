class levelSetting extends Phaser.Scene {
  constructor() {
    super("levelSetting");
  }

  create() {


    const Easy = this.add.text(config.width/3+30, config.height/3, 'Easy', {
      font: "40px Arial",
      fill: 'green'
      })
      .setInteractive()
      .on('pointerdown', () => this.updateToEasyScene());

    const Normal = this.add.text(config.width/3+30, config.height/3 + 50, 'Normal', {
      font: "40px Arial",
      fill: 'blue'
      })
      .setInteractive()  
      .on('pointerdown', () => this.updateToNormalScene());

    const Hard = this.add.text(config.width/3+30, config.height/3 + 100, 'Hard', {
      font: "40px Arial",
      fill: 'red'
      })
      .setInteractive()
      .on('pointerdown', () => this.updateToHardScene());

    const Expert = this.add.text(config.width/3+30, config.height/3 + 150, 'Expert', {
    font: "40px Arial",
    fill: 'black'
    })
    .setInteractive()
    .on('pointerdown', () => this.updateToExpertScene());
}

  updateToEasyScene() {
    this.scene.start("Easy");
  }
  updateToNormalScene() {
    this.scene.start("Normal");
  }
  updateToHardScene() {
    this.scene.start("Hard");
  }
  updateToExpertScene() {
    this.scene.start("Expert");
  }
  
}
