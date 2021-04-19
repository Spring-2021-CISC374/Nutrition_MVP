class Easy extends Phaser.Scene {
    constructor() {
      super("Easy");
    }
    CscoreText;
    Cscore =0;
    PscoreText;
    Pscore =0;
    whether=0;
    create() {
      this.whether=0;
      // this.table = this.add.image(100, 150, "table").setOrigin(0).setScale(1.5)
      this.apple = this.add.image(100, 250, "apple").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown',() => this.appleInfo());
      this.chicken = this.add.image(200, 250, "chicken").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.chickInfo());
      this.popcorn = this.add.image(300, 250, "popcorn").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.popcornInfo());
      this.cookie = this.add.image(400, 250, "cook").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.cookieInfo());
      this.cupcake = this.add.image(500, 250, "cupcake").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.cupcakeInfo());
      this.sushi = this.add.image(600, 250, "sushi").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.sushiInfo());
      this.hamgurger = this.add.image(200, 350, "hamgurger").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.hamgurgerInfo());
      this.incecream = this.add.image(300, 350, "icecream").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.incecreamInfo());
      this.juice = this.add.image(400, 350, "juice").setOrigin(0).setScale(1).setInteractive()
      .on('pointerdown', () => this.juiceInfo());
      const backButton = this.add.text(config.width - 200, config.height - 40, 'Back To Mode Menu', {
        font: "20px Arial",
        fill: 'black'
        })
        .setInteractive()
        .on('pointerdown', () => this.updateScene());
      const whetherButton = this.add.text(config.width - 140, config.height - 580, 'info/change', {
          font: "20px Arial",
          fill: 'black'
          })
          .setInteractive()
          .on('pointerdown', () => this.whether1());

          const deleteButton = this.add.text(config.width - 140, config.height - 550, 'Initialize', {
            font: "20px Arial",
            fill: 'black'
            })
            .setInteractive()
            .on('pointerdown', () => this.initialize());

      this.CscoreText = this.add.text(16, 16, 'The total cal: 0', { font: '20px Arial', fill: '#000' });
      this.Cscore = 0;
      this.PscoreText = this.add.text(16, 40, 'The total protein(g): 0', { font: '20px Arial', fill: '#000' });
      this.Pscore=0;
    }

    updateScene() {
      this.scene.start("level");
      
    }

    initialize(){
      this.Cscore=0;
      this.CscoreText.setText('The total cal: '+ this.Cscore);
      this.Pscore=0;
      this.PscoreText.setText('The total protein(g): '+this.Pscore);
    }

    whether1(){
      if(this.whether==0){
        this.whether=1;
        alert("You can check the info of the food now!");
      }
      else{
        this.whether=0;
        alert("You can add or delete food now!");
      }
    }
    addcal(){
      this.Cscore+=10;
      this.CscoreText.setText('The total cal: '+ this.Cscore);
    }
    addPro(){
      this.Pscore+=12;
      this.PscoreText.setText('The total protein(g): '+ this.Pscore);
    }
    appleInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is an apple about 150 grams, edible parts about 135 grams, contains 60 kcal of energy");
      }
    }
    chickInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a roast chicken. It weighs about 500 grams and contains 972 kcal of energy");
      }
    }
    

    popcornInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a bucket of popcorn, weighing about 300 grams, and contains 1000 kcal of energy");
      }
    }

    cookieInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a cookie that weighs about 6 grams and contains 26 kilocalories");
      }
    }

    cupcakeInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a cake that weighs about 80 grams and contains 278 kilocalories");
      }
    }

    sushiInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a sushi that weighs about 100 grams and contains 120 kilocalories");
      }
    }

    hamgurgerInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a hamberger that weighs about 120 grams and contains 354 kilocalories");
      }
    }

    incecreamInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a 66 gram ice cream with 137 kilocalories");
      }
    }

    juiceInfo(){
      if(this.whether==0){
        this.addcal();
        this.addPro();
      }
      else{
      alert("This is a glass of 249 grams of juice with 136 kilocalories");
      }
    }
  }
