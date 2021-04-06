class GameMenu extends Phaser.Scene {
  constructor() {
    super("GameMenu");
}

  create() {

    this.background = this.add.image(0, 0, "background").setOrigin(0).setScale(1.5);

    this.add.text(config.width/2-85, config.height/3-50, "Nutrition", {
      font: "50px Arial",
      fill: "black"
    });

    const startGameButton = this.add.text(config.width/2-180 , config.height/2-20, 'Start Game', {
      font: "80px Arial",
      fill: 'black'
      })
      .setInteractive()
      .on('pointerdown', () => this.updateSettingDiffScene());
    }

  updateSettingDiffScene() {
    this.scene.start("levelSetting");
  }

} 
