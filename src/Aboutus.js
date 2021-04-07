class Aboutus extends Phaser.Scene {
    constructor() {
        super("Aboutus");
    }

    create() {

        const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Main Menu', {
            font: "20px Arial",
            fill: 'black'
        })
            .setInteractive()
            .on('pointerdown', () => this.updateScene());
    }

    updateScene() {
        this.scene.start("GameMenu");
    }
}