
class Hard extends Phaser.Scene {
    constructor() {
      super("Hard");
    }
  
    create() {
      this.table = this.add.image(100, 150, "table").setOrigin(0).setScale(1.5)
      this.apple = this.add.image(100, 150, "apple").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.chicken = this.add.image(200, 150, "chicken").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.popcorn = this.add.image(300, 150, "popcorn").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.cookie = this.add.image(400, 150, "cook").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.cupcake = this.add.image(500, 150, "cupcake").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.sushi = this.add.image(600, 150, "sushi").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.hamgurger = this.add.image(200, 250, "hamgurger").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.incecream = this.add.image(300, 250, "icecream").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
      this.juice = this.add.image(400, 250, "juice").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.Info());
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
    Info(){
      alert("This is the Hard mode, no tips here!");
    }
    
  }