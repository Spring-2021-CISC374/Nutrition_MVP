class level extends Phaser.Scene {
    constructor() {
        super("level");
    }

  
    create() {
        var x = 200;
        var y = 450;    

        this.background = this.add.image(0, 0, "map").setOrigin(0).setScale(1.9);

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(205, 310, "level1").setOrigin(0).setScale(0.2);
        this.platforms.create(455, 450, "level2").setOrigin(0).setScale(0.2);
        this.platforms.create(550, 170, "level3").setOrigin(0).setScale(0.2);
        this.platforms.create(700, 170, "level4").setOrigin(0).setScale(0.2);

        this.player = this.physics.add.sprite(x, y, 'player').setScale(0.5);
       
        this.cursors = this.input.keyboard.createCursorKeys();

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player',{start: 1, end: 7}),
            frameRate: 4,
            repeat: -1
        });

        //this.left = this.add.sprite(500, 200, "left").setScale(1.5)
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player',{start: 8, end: 15}),
            frameRate: 4,
            repeat: -1
        });
        //this.left.play("left_anim");

        //this.right = this.add.sprite(200, 500, "right").setScale(1.5)
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player',{start: 16, end: 23}),
            frameRate: 4,
            repeat: -1
        });
        //this.right.play("right_anim");

        //this.up = this.add.sprite(500, 500, "up").setScale(1.5)
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player',{start: 24, end: 31}),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: {key: 'player',frame: 0},
            frameRate: 1,
            repeat: -1

        });
        //this.up.play("up_anim");


        
        const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Menu Page', {
            font: "20px Arial",
            fill: 'black'
        })
            .setInteractive()
            .on('pointerdown', () => this.updateScene());

        this.physics.add.collider(this.player, this.platforms, function(player, level1){
            this.updateToLevel1;
        });
        this.physics.add.collider(this.player, this.platforms, function(player, level2){
            this.updateToLevel2;
        });
        this.physics.add.collider(this.player, this.platforms, function(player, level3){
            this.updateToLevel3;
        });
        this.physics.add.collider(this.player, this.platforms, function(player, level4){
            this.updateToLevel4;
        });
    }



    updateScene() {
        this.scene.start("GameMenu");
    }
    
    update(){
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.play('left',true);
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown){
            this.player.setVelocityY(-160);
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(160);
            this.player.anims.play('down', true);
        }else{
            this.player.setVelocity(0,0);
            this.player.anims.play('down');
    

        }
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