
class Easy extends Phaser.Scene {
    constructor() {
      super("Easy");
    }
    scoreText;
    score =0;
    whether=0;
    create() {
      this.whether=0;
      this.table = this.add.image(100, 150, "table").setOrigin(0).setScale(1.5)
      this.apple = this.add.image(100, 150, "apple").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown',() => this.appleInfo());
      this.chicken = this.add.image(200, 150, "chicken").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.chickInfo());
      this.popcorn = this.add.image(300, 150, "popcorn").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.popcornInfo());
      this.cookie = this.add.image(400, 150, "cook").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.cookieInfo());
      this.cupcake = this.add.image(500, 150, "cupcake").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.cupcakeInfo());
      this.sushi = this.add.image(600, 150, "sushi").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.sushiInfo());
      this.hamgurger = this.add.image(200, 250, "hamgurger").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.hamgurgerInfo());
      this.incecream = this.add.image(300, 250, "icecream").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.incecreamInfo());
      this.juice = this.add.image(400, 250, "juice").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.juiceInfo());
      const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Mode Menu', {
        font: "20px Arial",
        fill: 'black'
        })
        .setInteractive()
        .on('pointerdown', () => this.updateScene());
      const whetherButton = this.add.text(config.width - 140, config.height - 580, 'info/add', {
          font: "20px Arial",
          fill: 'black'
          })
          .setInteractive()
          .on('pointerdown', () => this.whether());

      this.scoreText = this.add.text(16, 16, 'The recent cal: 0', { fontSize: '32px', fill: '#000' });
      this.score = 0;
    }

    // update(){

    // }
  
    updateScene() {
      this.scene.start("level");
    }
    whether(){
      alert("we");
      if(this.whether==0){
        this.whether=1;
        alert("the recent whther is 1");
      }
      else{
        this.whether=0;
        alert("the recent whther is 0");
      }
    }
    appleInfo(){
      if(this.whether==0){
        this.score+=10;
        this.scoreText.setText('The recent cal: '+ this.score);
      }
      else{
      alert("This is an apple about 150 grams, edible parts about 135 grams, contains 60 kcal of energy");
      }
    }
    chickInfo(){
      this.score+=10;
      this.scoreText.setText('The recent cal: '+ this.score);
      alert("This is a roast chicken. It weighs about 500 grams and contains 972 kcal of energy");
    }
    

    popcornInfo(){
      alert("This is a bucket of popcorn, weighing about 300 grams, and contains 1000 kcal of energy");
    }

    cookieInfo(){
      alert("This is a cookie that weighs about 6 grams and contains 26 kilocalories");
    }

    cupcakeInfo(){
      alert("This is a cake that weighs about 80 grams and contains 278 kilocalories");
    }

    sushiInfo(){
      alert("This is a sushi that weighs about 100 grams and contains 120 kilocalories");
    }

    hamgurgerInfo(){
      alert("This is a hamberger that weighs about 120 grams and contains 354 kilocalories");
    }

    incecreamInfo(){
      alert("This is a 66 gram ice cream with 137 kilocalories");
    }

    juiceInfo(){
      alert("This is a glass of 249 grams of juice with 136 kilocalories");
    }
  }
