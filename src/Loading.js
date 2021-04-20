class Loading extends Phaser.Scene {
    constructor() {
      super("Loading");
    }
  
    preload(){
      this.load.image("background", "asserts/background.png");
      this.load.image("apple","asserts/food/apple.jpg");
      this.load.image("chicken","asserts/food/chicken.jpg");
      this.load.image("cook","asserts/food/cookie.jpg");
      this.load.image("cupcake","asserts/food/cupcake.jpg");
      this.load.image("hamgurger","asserts/food/hamgurger.jpg");
      this.load.image("icecream","asserts/food/icecream.jpg");
      this.load.image("juice","asserts/food/juice.jpg");
      this.load.image("milk","asserts/food/milk.jpg");
      this.load.image("popcorn","asserts/food/popcorn.jpg");
      this.load.image("steak","asserts/food/steak.jpg");
      this.load.image("sushi","asserts/food/sushi.jpg");
      this.load.image("taco","asserts/food/taco.jpg");
      this.load.image("Title","asserts/NUTRITION RECIPES.png");
      this.load.image("map","asserts/map.jpg");
      this.load.image("easy","asserts/Easy.png");
      this.load.image("normal","asserts/Normal.png");
      this.load.image("hard","asserts/Hard.png");
      this.load.image("expert","asserts/Expert.png");
      this.load.image("red","asserts/red.png");
      this.load.image("blue","asserts/blue.png");
      this.load.image("grey","asserts/grey.png");
      this.load.image("green","asserts/green.png");
      this.load.image("level1","asserts/l1.png");
      this.load.image("level2","asserts/l2.png");
      this.load.image("level3","asserts/l3.png");
      this.load.image("level4","asserts/l4.png");
      this.load.image("table","asserts/food/table.png");
      this.load.spritesheet("player", "asserts/player/Moving.png", {
        frameWidth: 54,
        frameHeight: 60
      });
      

    }
  
    create() {

      this.scene.start("GameMenu");
    }
  }

