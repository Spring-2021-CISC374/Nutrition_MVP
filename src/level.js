class level extends Phaser.Scene {
    constructor() {
        super("level");
    }

  
    create() {
        var x = 100;
        var y = 100;    

        this.background = this.add.image(0, 0, "map").setOrigin(0).setScale(1.9);
        this.level1 = this.add.image(205, 310, "level1").setOrigin(0).setScale(0.2)
        this.level2 = this.add.image(455, 450, "level2").setOrigin(0).setScale(0.2)
        this.level3 = this.add.image(550, 170, "level3").setOrigin(0).setScale(0.2)
        this.level4 = this.add.image(700, 170, "level4").setOrigin(0).setScale(0.2)

        
        this.anims.create({
            key: "down_anim",
            frames: this.anims.generateFrameNumbers("down"),
            frameRate: 4,
            repeat: -1
        });
        this.down = this.add.sprite(x, y, "down").setScale(1.5)
        this.down.play("down_anim");
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        //this.left = this.add.sprite(500, 200, "left").setScale(1.5)
        this.anims.create({
            key: "left_anim",
            frames: this.anims.generateFrameNumbers("left"),
            frameRate: 4,
            repeat: -1
        });
        //this.left.play("left_anim");

        //this.right = this.add.sprite(200, 500, "right").setScale(1.5)
        this.anims.create({
            key: "right_anim",
            frames: this.anims.generateFrameNumbers("right"),
            frameRate: 4,
            repeat: -1
        });
        //this.right.play("right_anim");

        //this.up = this.add.sprite(500, 500, "up").setScale(1.5)
        this.anims.create({
            key: "up_anim",
            frames: this.anims.generateFrameNumbers("up"),
            frameRate: 4,
            repeat: -1
        });
        //this.up.play("up_anim");

        


        const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Menu Page', {
            font: "20px Arial",
            fill: 'black'
        })
            .setInteractive()
            .on('pointerdown', () => this.updateScene());

        this.physics.add.collider(this.down, this.level1, function(down, level1){
            this.updateToLevel1();
        });
        this.physics.add.collider(this.down, this.level2, function(down, level2){
            updateToLevel2();
        });
        this.physics.add.collider(this.down, this.level3, function(down, level3){
            updateToLevel3();
        });
        this.physics.add.collider(this.down, this.level4, function(down, level4){
            updateToLevel4();
        });
    }

    updateScene() {
        this.scene.start("GameMenu");
    }

    movePlayerManager() {
        if (this.cursorKeys.left.isDown) {
            //this.left = this.add.sprite(300, 200, "left").setScale(1.5);
            //this.left.play("left_anim")
            if(this.down.x<=0){
                this.down.x=0;
            }
            else{
                this.down.x -= 1;
            }
        }
        else if(this.cursorKeys.right.isDown){
            //this.right = this.add.sprite(this.down.x, this.down.y, "left").setScale(1.5);
            //this.right.play("right_anim")
            if(this.down.x>=935){
                this.down.x=935;
            }
            else{
                this.down.x += 1;
            }
        }
        else if (this.cursorKeys.up.isDown){
            if(this.down.y<=0){
                this.down.y=0;
            }
            else{
                this.down.y -= 1;
            }
        }
        else if (this.cursorKeys.down.isDown){
            if(this.down.y>=600){
                this.down.y=600;
            }
            else{
                this.down.y += 1;
            }
        }
    }
    
    update(){
        this.movePlayerManager();
    }

    updateToLevel1(){
        this.scene.start("Easy");
    }
    updateToLevel2(){
        this.scene.start("Normal");
    }
    updateToLevel3(){
        this.scene.start("Hard");
    }
    updateToLevel4(){
        this.scene.start("Expert");
    }

}