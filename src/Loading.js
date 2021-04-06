class Loading extends Phaser.Scene {
    constructor() {
      super("Loading");
    }
  
    preload(){
      this.load.image("background", "asserts/background.png");
      this.load.image("table","asserts/images.png");
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
  
    }
  
    create() {

      this.scene.start("GameMenu");
    }
  }

