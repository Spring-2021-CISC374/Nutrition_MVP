class GameMenu extends Phaser.Scene {
  constructor() {
    super("GameMenu");
  }

  create() {

    this.background = this.add.tileSprite(0, 0, config.width, config.height, "map").setOrigin(0).setScale(2);
    this.background.tilePositionX += 200; 

    this.Title = this.add.image(110, 100, "Title").setOrigin(0).setScale(0.5)

    var grey = this.add.image(config.width / 3 + 70, 300, "grey").setOrigin(0).setScale(0.2)
    var green = this.add.image(config.width / 3 + 70, 350, "green").setOrigin(0).setScale(0.19)
    var blue = this.add.image(config.width / 3 + 70, 400, "blue").setOrigin(0).setScale(0.15)
    var red = this.add.image(config.width / 3 + 70, 450, "red").setOrigin(0).setScale(0.2)

    const Easy = this.add.image(config.width / 3 + 110, 320, "easy").setOrigin(0).setScale(0.2)
      .setInteractive()
      .on('pointerdown', () => this.updateToEasyScene());

    const Normal = this.add.image(config.width / 3 + 95, 365, "normal").setOrigin(0).setScale(0.2)
      .setInteractive()
      .on('pointerdown', () => this.updateToNormalScene());

    const Hard = this.add.image(config.width / 3 + 105, 418, "hard").setOrigin(0).setScale(0.2)
      .setInteractive()
      .on('pointerdown', () => this.updateToHardScene());

    const Expert = this.add.image(config.width / 3 + 95, 470, "expert").setOrigin(0).setScale(0.2)
      .setInteractive()
      .on('pointerdown', () => this.updateToExpertScene());

    const About_us = this.add.text(config.width - 100, config.height - 40, 'About us', {
      font: "20px Arial",
      fill: 'black'
    })
      .setInteractive()
      .on('pointerdown', () => this.updateScene());
  }


  update() {
    this.background.tilePositionX += 0.6;
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
  updateScene() {
    this.scene.start("level");
  }

}