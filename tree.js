class Tree extends BaseClass{
  constructor(x,y,height){
    var options ={
      isStatic: true
    }
    super(x,y,20,height, options);
    this.image = loadImage("Plucking mangoes/tree.png");

  }
}