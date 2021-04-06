class GameMenu extends Phaser.Scene {
  constructor() {
    super("GameMenu");
}

  create() {

    this.background = this.add.image(0, 0, "background").setOrigin(0).setScale(5);

    this.add.text(config.width/3, config.height/3-50, "Nutrition", {
      font: "50px Arial",
      fill: "black"
    });

    const startGameButton = this.add.text(config.width/3-10 , config.height/2-20, 'Start Game', {
      font: "40px Arial",
      fill: '#0f0'
      })
      .setInteractive()
      .on('pointerdown', () => this.updateSettingDiffScene());
    }

  updateSettingDiffScene() {
    this.scene.start("levelSetting");
  }


} 