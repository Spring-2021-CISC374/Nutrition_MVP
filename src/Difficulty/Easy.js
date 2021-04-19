class Easy extends Phaser.Scene {
    constructor() {
      super("Easy");
    }
    callist = [52, 181, 413.5,433, 347,123.5, 295.5, 74, 26];//kc
    prolist = [0.2, 16, 10, 9, 8.6, 7, 23.8, 2.2, 0.9];//g
    vitaminClist = [4, 0, 0, 3, 0, 3, 0, 0, 11];//mg
    carbohydratelist = [12, 0, 55, 70.6, 66.7, 18.5, 1.1, 14.3, 5.2];//g
    VscoreText;
    Vscore=0;
    carbscoreText;
    Carbscore=0;
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

      this.CscoreText = this.add.text(16, 16, 'The total cal(kc): 0', { font: '20px Arial', fill: '#000' });
      this.Cscore = 0;
      this.PscoreText = this.add.text(16, 40, 'The total protein(g): 0', { font: '20px Arial', fill: '#000' });
      this.Pscore=0;
      this.VscoreText = this.add.text(16, 64, 'The total V(mg): 0', { font: '20px Arial', fill: '#000' });
      this.Vscore=0;
      this.carbscoreText = this.add.text(16, 88, 'The total Carbon(g): 0', { font: '20px Arial', fill: '#000' });
      this.Carbscore=0;
    }

    updateScene() {
      this.scene.start("level");
      
    }

    initialize(){
      this.Cscore=0;
      this.CscoreText.setText('The total cal(kc): '+ this.Cscore);
      this.Pscore=0;
      this.PscoreText.setText('The total protein(g): '+this.Pscore);
      this.Vscore=0;
      this.VscoreText.setText('The total V(mg): '+this.Vscore);
      this.Carbscore =0;
      this.carbscoreText.setText('The total Carbon(g): '+this.Carbscore);
      alert("You have initialized the nutrition data successfully!");
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
    addcal(index){
      this.Cscore+=this.callist[index-1];
      this.CscoreText.setText('The total cal: '+ this.Cscore);
    }
    addPro(index){
      this.Pscore+=this.prolist[index-1];
      this.PscoreText.setText('The total protein(g): '+ this.Pscore);
    }
    addV(index){
      this.Vscore+=this.vitaminClist[index-1];
      this.VscoreText.setText('The total V(mg): '+ this.Vscore);
    }
    addCarbon(index){
      this.Carbscore+=this.carbohydratelist[index-1];
      this.carbscoreText.setText('The total Carbon(g): '+this.Carbscore);
    }
    appleInfo(){
      if(this.whether==0){
        this.addcal(1);
        this.addPro(1);
        this.addV(1);
        this.addCarbon(1);
      }
      else{
      alert("This is an apple about 100 grams, edible parts about 100 grams, contains "+this.callist[0]+" kcal of energy, "+this.prolist[0]+" grams proteins, "+this.vitaminClist[0]+" milligrams vitamin C and "+this.carbohydratelist[0]+"grams carbohydrate");
      }
    }
    chickInfo(){
      if(this.whether==0){
        this.addcal(2);
        this.addPro(2);
        this.addV(2);
        this.addCarbon(2);
      }
      else{
        alert("This is rost cicken leg about 100 grams, contains "+this.callist[1]+" kcal of energy, "+this.prolist[1]+" grams proteins, "+this.vitaminClist[1]+" milligrams vitamin C and "+this.carbohydratelist[1]+"grams carbohydrate");
      }
    }
    

    popcornInfo(){
      if(this.whether==0){
        this.addcal(3);
        this.addPro(3);
        this.addV(3);
        this.addCarbon(3);
      }
      else{
      alert("This is a bucket of popcorn, weighing about 100 grams, and contains "+this.callist[2]+" kcal of energy, "+this.prolist[2]+" grams proteins, "+this.vitaminClist[2]+" milligrams vitamin C and "+this.carbohydratelist[2]+"grams carbohydrate");
      }
    }

    cookieInfo(){
      if(this.whether==0){
        this.addcal(4);
        this.addPro(4);
        this.addV(4);
        this.addCarbon(4);
      }
      else{
      alert("This is a cookie that weighs about 100 grams and contains "+this.callist[3]+" kcal of energy, "+this.prolist[3]+" grams proteins, "+this.vitaminClist[3]+" milligrams vitamin C and "+this.carbohydratelist[3]+"grams carbohydrate");
      }
    }

    cupcakeInfo(){
      if(this.whether==0){
        this.addcal(5);
        this.addPro(5);
        this.addV(5);
        this.addCarbon(5);
      }
      else{
      alert("This is a cake that weighs about 100 grams and contains "+this.callist[4]+" kcal of energy, "+this.prolist[4]+" grams proteins, "+this.vitaminClist[4]+" milligrams vitamin C and "+this.carbohydratelist[4]+"grams carbohydrate");
      }
    }

    sushiInfo(){
      if(this.whether==0){
        this.addcal(6);
        this.addPro(6);
        this.addV(6);
        this.addCarbon(6);
      }
      else{
      alert("This is a sushi that weighs about 100 grams and contains "+this.callist[5]+" kcal of energy, "+this.prolist[5]+" grams proteins, "+this.vitaminClist[5]+" milligrams vitamin C and "+this.carbohydratelist[5]+"grams carbohydrate");
      }
    }

    hamgurgerInfo(){
      if(this.whether==0){
        this.addcal(7);
        this.addPro(7);
        this.addV(7);
        this.addCarbon(7);
      }
      else{
      alert("This is a hamberger that weighs about 100 grams and contains "+this.callist[6]+" kcal of energy, "+this.prolist[6]+" grams proteins, "+this.vitaminClist[6]+" milligrams vitamin C and "+this.carbohydratelist[6]+"grams carbohydrate");
      }
    }

    incecreamInfo(){
      if(this.whether==0){
        this.addcal(8);
        this.addPro(8);
        this.addV(8);
        this.addCarbon(8);
      }
      else{
      alert("This is a 100 grams ice cream and contains "+this.callist[7]+" kcal of energy, "+this.prolist[7]+" grams proteins, "+this.vitaminClist[7]+" milligrams vitamin C and "+this.carbohydratelist[7]+"grams carbohydrate");
      }
    }

    juiceInfo(){
      if(this.whether==0){
        this.addcal(9);
        this.addPro(9);
        this.addV(9);
        this.addCarbon(9);
      }
      else{
      alert("This is a glass of 249 grams of juice and contains "+this.callist[8]+" kcal of energy, "+this.prolist[8]+" grams proteins, "+this.vitaminClist[8]+" milligrams vitamin C and "+this.carbohydratelist[8]+"grams carbohydrate");
      }
    }
  }
