class level extends Phaser.Scene {
    constructor() {
        super("level");
    }
    
    create() {

        const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Main Page', {
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